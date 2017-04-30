import Dispatcher from '../dispatcher'

export const CHANGE_HOSTNAME = 'CHANGE_HOSTNAME'
export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const UPDATE_RESULT = 'UPDATE_RESULT'
export const UPDATE_ERROR = 'UPDATE_ERROR'
export const UPDATE_ACTION = 'UPDATE_ACTION'

export const changeHostname = (value = '') => {
  Dispatcher.dispatch({
    type: CHANGE_HOSTNAME,
    value: value
  })
}

export const changeEmail = (value = '') => {
  Dispatcher.dispatch({
    type: CHANGE_EMAIL,
    value: value
  })
}

export const changePassword = (value = '') => {
  Dispatcher.dispatch({
    type: CHANGE_PASSWORD,
    value: value
  })
}

export const submitOauth = (value = {}) => {
  fetch(`https://${value.hostname}/api/v1/instance`)
  .then((response) => response.json())
  .then((data) => {
    Dispatcher.dispatch({
      type: UPDATE_RESULT,
      value: data
    })
    Dispatcher.dispatch({
      type: UPDATE_ERROR,
      value: ''
    })
  })
  .catch((error) => {
    Dispatcher.dispatch({
      type: UPDATE_RESULT,
      value: {}
    })
    Dispatcher.dispatch({
      type: UPDATE_ERROR,
      value: '接続に失敗しました'
    })
  })
}
