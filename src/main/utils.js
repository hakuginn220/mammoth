import { ipcMain } from 'electron'

export default () => {
  ipcMain.on('CREATE_INSTANCE', (event, accessToken) => {
    console.log(accessToken)
  })
}
