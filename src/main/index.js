import path from 'path'
import url from 'url'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { useStrict, autorun } from 'mobx'
import { OAuth2 } from 'oauth'

import * as ipc from '../share/ipc'

useStrict(true)

autorun((reaction) => {
  console.log(reaction.name)
})

let current = null

function createWindow () {
  if (current !== null) return

  current = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 320,
    minHeight: 480,
    icon: path.join(__dirname, 'images/icon.ico'),
    backgroundColor: '#ffffff',
    darkTheme: true
  })

  current.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  current.on('closed', () => {
    current = null
  })
}

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

  const { hostname } = value

  const oauth = new OAuth2(
    'your_client_id',
    'your_client_secret',
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
