import { ipcMain, net } from 'electron'

export const OATH_SUBMIT = 'OATH_SUBMIT'
export const OATH_SUBMIT_FAIL = 'OATH_SUBMIT_FAIL'
export const OATH_SUBMIT_SUCCESS = 'OATH_SUBMIT_SUCCESS'

export default () => {
  ipcMain.on(OATH_SUBMIT, (event, value) => {
    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: value,
      port: 443,
      path: '/api/v1/instance'
    })

    request.on('error', (error) => {
      console.log(error)
      event.sender.send(OATH_SUBMIT_FAIL)
    })

    request.on('response', (response) => {
      response.on('data', (data) => {
        event.sender.send(OATH_SUBMIT_SUCCESS, JSON.parse(data))
      })
    })

    request.end()
  })
}
