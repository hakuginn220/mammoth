import { app, ipcMain } from 'electron'

import * as ipc from '../ipc'
import { createWindow } from './window'

ipcMain.on(ipc.ADD_REGISTER_USER, (event, registerUser) => {
  console.log(registerUser)
  event.sender.send(ipc.ADD_REGISTER_USER, registerUser)
})

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
