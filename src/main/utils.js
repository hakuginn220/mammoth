import path from 'path'
import url from 'url'
import { BrowserWindow } from 'electron'

let browser = null

export function createWindow () {
  if (browser !== null) return

  browser = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 320,
    minHeight: 480,
    icon: path.join(__dirname, 'images/icon.ico'),
    backgroundColor: '#ffffff',
    darkTheme: true
  })

  browser.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  browser.on('closed', () => {
    browser = null
  })
}
