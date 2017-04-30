import url from 'url'
import fetch from 'isomorphic-fetch'
import { ipcMain } from 'electron'
import * as Actions from '../actions/oauth'

export default () => {
  ipcMain.on(Actions.SUBMIT_OAUTH, (event, value) => {
    const api = url.format({
      protocol: 'https:',
      hostname: value.hostname,
      pathname: 'api/v1/instance'
    })

    fetch(api)
    .then((response) => {
      return response.json()
    })
    .then((stories) => {
      console.log(stories)
      event.sender.send(Actions.SUBMIT_OAUTH_SUCCESS, stories)
    })
    .catch((error) => {
      console.log(error)
      event.sender.send(Actions.SUBMIT_OAUTH_FAIL)
    })
  })
}
