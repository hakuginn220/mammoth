import path from 'path'
import url from 'url'
import { app, BrowserWindow } from 'electron'
import ipc from './ipc'

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
  ipc()
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