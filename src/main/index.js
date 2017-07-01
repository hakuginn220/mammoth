import { app, ipcMain } from 'electron'
import { useStrict } from 'mobx'

import store from './store'
import { createWindow } from './utils'
import * as ipc from '../share/ipc'

useStrict(true)

ipcMain.on(ipc.ADD_USER, (event, user) => {
  console.log(ipc.ADD_USER)
  store.addUser(user)
  event.sender.send(ipc.ADD_USER)
})

ipcMain.on(ipc.REMOVE_USER, (event, userIndex) => {
  console.log(ipc.REMOVE_USER)
  store.removeUser(userIndex)
  event.sender.send(ipc.REMOVE_USER)
})

ipcMain.on(ipc.GET_USERS, (event) => {
  console.log(ipc.GET_USERS)
  event.sender.send(ipc.GET_USERS, store.users)
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
