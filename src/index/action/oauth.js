import { ipcRenderer } from 'electron'
import Dispatcher from '../dispatcher'

export const OAUTH_UPDATE_VALUE = 'OAUTH_UPDATE_VALUE'
export const OAUTH_UPDATE_RESULT = 'OAUTH_UPDATE_RESULT'
export const OAUTH_UPDATE_ERROR = 'OAUTH_UPDATE_ERROR'
export const OAUTH_UPDATE_ACTION = 'OAUTH_UPDATE_ACTION'

export const oauthUpdateValue = (value) => {
  Dispatcher.dispatch({
    type: OAUTH_UPDATE_VALUE,
    value: value
  })
}

export const oauthUpdateResult = (value) => {
  Dispatcher.dispatch({
    type: OAUTH_UPDATE_ERROR,
    value: ''
  })

  ipcRenderer.send('OATH_SUBMIT', value)

  ipcRenderer.on('OATH_SUBMIT_FAIL', (event) => {
    Dispatcher.dispatch({
      type: OAUTH_UPDATE_RESULT,
      value: {}
    })
    Dispatcher.dispatch({
      type: OAUTH_UPDATE_ERROR,
      value: '接続に失敗しました'
    })
    Dispatcher.dispatch({
      type: OAUTH_UPDATE_ACTION,
      value: 0
    })
  })

  ipcRenderer.on('OATH_SUBMIT_SUCCESS', (event, result) => {
    Dispatcher.dispatch({
      type: OAUTH_UPDATE_RESULT,
      value: result
    })
    Dispatcher.dispatch({
      type: OAUTH_UPDATE_ACTION,
      value: 1
    })
  })
}
