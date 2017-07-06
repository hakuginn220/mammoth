import path from 'path'
import { app, ipcMain, shell } from 'electron'
import fs from 'fs-extra'
import { OAuth2 } from 'oauth'

import Store from './store'
import * as utils from './utils'
import * as ipc from '../common/ipc'

const test = new Store()

test.save()

const json = path.join(app.getPath('userData'), 'store.json')
let store = fs.readJsonSync(json, { throws: false })
if (store === null) store = {}
let oauth

let browser = null

app.on('ready', () => {
  utils.createWindow(browser)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  utils.createWindow(browser)
})

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

  store.hostname = hostname
  store.apps = apps

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
      store.accessToken = accessToken
      console.log(store)
      fs.writeJsonSync(json, store)
      event.sender.send(ipc.AUTHORIZATION_CODE)
    }
  })
})

ipcMain.on(ipc.HOME, (event) => {
  console.log(ipc.HOME)
  event.sender.send(ipc.HOME, { store })
})
