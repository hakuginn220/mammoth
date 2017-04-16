const { ipcMain } = require('electron')

ipcMain.on('AppChange', (event, param) => {
  event.sender.send('AppChange', param)
  // console.log('[AppChange]:', param)
})

ipcMain.on('WebviewLoading', (event, param) => {
  event.sender.send('WebviewLoading', param)
  // console.log('[WebviewLoading]:', param)
})
