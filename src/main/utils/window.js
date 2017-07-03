import path from 'path'
import url from 'url'
import { BrowserWindow } from 'electron'

let current = null

export function createWindow () {
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
