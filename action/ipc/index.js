const { ipcMain } = require('electron')

ipcMain.on('AppChange', (event, param) => {
  event.sender.send('AppChange', param)
})

ipcMain.on('WebviewLoading', (event, param) => {
  event.sender.send('WebviewLoading', param)
})
