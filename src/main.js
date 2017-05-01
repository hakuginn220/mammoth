import fs from 'fs'
import path from 'path'
import url from 'url'
import { app, BrowserWindow, ipcMain } from 'electron'
import * as Actions from './actions/oauth'

const userData = app.getPath('userData')
const userConfig = path.join(userData, 'config.json')

fs.readFile(userConfig, 'utf8', (error) => {
  if (error) fs.writeFile(userConfig, JSON.stringify({}, null, '    '))
})

ipcMain.on(Actions.CREATE_INSTANCE, (event, accessToken) => {
  fs.readFile(userConfig, 'utf8', (error, json) => {
    let config = JSON.parse(json)
    config = Object.assign(config, accessToken)
    config = JSON.stringify(config, null, '    ')
    fs.writeFile(userConfig, config)
  })
})

let win

var createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 320,
    minHeight: 480,
    icon: path.join(__dirname, 'images/icon.ico'),
    backgroundColor: '#282c37',
    darkTheme: true
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
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
  if (win === null) {
    createWindow()
  }
})
