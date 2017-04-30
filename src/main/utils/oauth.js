import { ipcMain, net } from 'electron'
import * as Actions from '../actions/oauth'

const submitOauth = (value) => {
  return new Promise((resolve, reject) => {
    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: value.hostname,
      port: 443,
      path: '/api/v1/instance'
    })
    request.on('error', (error) => {
      reject(error)
    })
    request.on('response', (response) => {
      response.on('data', (data) => {
        resolve(data)
      })
    })
    request.end()
  })
}

export default () => {
  ipcMain.on(Actions.SUBMIT_OAUTH, (event, value) => {
    submitOauth(value)
    .then((data) => {
      console.log(JSON.parse(data))
      event.sender.send(Actions.SUBMIT_OAUTH_SUCCESS, JSON.parse(data))
    })
    .catch((error) => {
      console.log(error)
      event.sender.send(Actions.SUBMIT_OAUTH_FAIL)
    })
  })
}
