import { ipcMain, net } from 'electron'
import * as Actions from '../actions/oauth'

export default () => {
  ipcMain.on(Actions.SUBMIT_OAUTH, (event, value) => {
    console.log(value)

    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: value.hostname,
      port: 443,
      path: '/api/v1/instance'
    })

    request.on('error', (error) => {
      console.log(error)
      event.sender.send(Actions.SUBMIT_OAUTH_FAIL)
    })

    request.on('response', (response) => {
      response.on('data', (data) => {
        console.log(JSON.parse(data))
        event.sender.send(Actions.SUBMIT_OAUTH_SUCCESS, JSON.parse(data))
      })
    })

    request.end()
  })
}
