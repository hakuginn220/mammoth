import { app, ipcMain, shell } from 'electron'
import { OAuth2 } from 'oauth'

import { createWindow } from './utils/window'
import * as ipc from '../common/ipc'

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  createWindow()
})

ipcMain.on(ipc.OAUTH_TOKEN, (event, value) => {
  console.log(ipc.OAUTH_TOKEN, value)

  const { hostname, apps } = value

  const oauth = new OAuth2(
    apps.client_id,
    apps.client_secret,
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
})
