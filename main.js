const path = require('path')
const url = require('url')
const { app, BrowserWindow } = require('electron')

let win

var createWindow = () => {
  win = new BrowserWindow({
    width: 1290,
    height: 750,
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
  require('./action/ipc')
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
