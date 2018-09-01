import { app, ipcMain } from 'electron'

import Store from '@/store'
import * as utils from '@/utils'
import * as action from 'common/action'

const store = new Store()

ipcMain.on('ready', e => {
  e.sender.send('ready', { type: null, payload: store.sync() })
})

ipcMain.on('dispatch', (e, value) => {
  console.log(value)

  switch (value.type) {
    case action.SYNC_STORE:
      e.sender.send('dispatch', { type: value.type, payload: store.sync() })
      break

    case action.START_OAUTH:
      store.startOauth(value.payload)
      e.sender.send('dispatch', { type: value.type, payload: store.sync() })
      break

    case action.END_OAUTH:
      store.endOauth(value.payload)
      e.sender.send('dispatch', { type: value.type, payload: store.sync() })
      break

    default:
      e.sender.send('dispatch', { type: null, payload: store.sync() })
      break
  }
})

app.on('ready', () => {
  utils.createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  utils.createWindow()
})
