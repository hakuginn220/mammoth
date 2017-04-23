import { ipcRenderer } from 'electron'
import Dispatcher from '../dispatcher'

export const List = {
  OAUTH_UPDATE_VALUE: 'OAUTH_UPDATE_VALUE',
  OAUTH_UPDATE_RESULT: 'OAUTH_UPDATE_RESULT',
  OAUTH_UPDATE_ERROR: 'OAUTH_UPDATE_ERROR',
  OAUTH_UPDATE_ACTION: 'OAUTH_UPDATE_ACTION'
}

export default {
  oauthUpdateValue (value) {
    Dispatcher.dispatch({
      type: List.OAUTH_UPDATE_VALUE,
      value: value
    })
  },
  oauthUpdateResult (value) {
    ipcRenderer.send('OATH_SUBMIT', value)

    ipcRenderer.on('OATH_SUBMIT_FAIL', (event) => {
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_RESULT,
        value: {}
      })
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_ERROR,
        value: '接続に失敗しました'
      })
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_ACTION,
        value: 0
      })
    })

    ipcRenderer.on('OATH_SUBMIT_SUCCESS', (event, result) => {
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_RESULT,
        value: result
      })
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_ERROR,
        value: ''
      })
      Dispatcher.dispatch({
        type: List.OAUTH_UPDATE_ACTION,
        value: 1
      })
    })
  }
}
