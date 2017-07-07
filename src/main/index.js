import { app, ipcMain, shell } from 'electron'
import { OAuth2 } from 'oauth'

import Store from './store'
import * as utils from './utils'
import * as ipc from '../common/ipc'
import * as action from '../action'

const store = new Store()

ipcMain.on('dispatch', (e, value) => {
  console.log(value)

  switch (value.type) {
    case action.SYNC_STORE:
      e.sender.send('dispatch', { type: value.type, payload: store.sync() })
      break

    case action.ADD_APPS:
      store.addApps(value.payload)
      e.sender.send('dispatch', { type: value.type, payload: store.sync() })
      break

    default:
      break
  }
})

app.on('ready', () => {
  utils.createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  utils.createWindow()
})

const testStore = {}
let oauth

ipcMain.on(ipc.AUTHORIZATION, (event, value) => {
  console.log(ipc.AUTHORIZATION, value)

  const { hostname, apps } = value
  const { client_id, client_secret } = apps

  oauth = new OAuth2(
    client_id,
    client_secret,
    `https://${hostname}`,
    null,
    '/oauth/token'
  )

  const url = oauth.getAuthorizeUrl({
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    response_type: 'code',
    scope: 'read write follow'
  })

  shell.openExternal(url)

  testStore.hostname = hostname
  testStore.apps = apps

  event.sender.send(ipc.AUTHORIZATION)
})

ipcMain.on(ipc.AUTHORIZATION_CODE, (event, value) => {
  console.log(ipc.AUTHORIZATION_CODE, value)

  const { code } = value

  oauth.getOAuthAccessToken(code, {
    grant_type: 'authorization_code',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
  }, (error, accessToken) => {
    if (error) {
      console.log(error)
      event.sender.send(ipc.AUTHORIZATION_CODE, error)
    } else {
      testStore.accessToken = accessToken
      console.log(testStore)
      event.sender.send(ipc.AUTHORIZATION_CODE)
    }
  })
})
