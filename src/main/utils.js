import path from 'path'
import url from 'url'
import { BrowserWindow } from 'electron'

export function createWindow (win) {
  if (win !== null) return

  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 320,
    minHeight: 480,
    icon: path.join(__dirname, 'images/icon.ico'),
    backgroundColor: '#ffffff',
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
