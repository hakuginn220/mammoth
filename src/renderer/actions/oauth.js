import { ipcRenderer } from 'electron'
import Dispatcher from '../dispatcher'

export const CHANGE_HOSTNAME = 'CHANGE_HOSTNAME'
export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const UPDATE_RESULT = 'UPDATE_RESULT'
export const CREATE_INSTANCE = 'CREATE_INSTANCE'

export const changeHostname = (value = '') => {
  Dispatcher.dispatch({ type: CHANGE_HOSTNAME, value: value })
}

export const changeEmail = (value = '') => {
  Dispatcher.dispatch({ type: CHANGE_EMAIL, value: value })
}

export const changePassword = (value = '') => {
  Dispatcher.dispatch({ type: CHANGE_PASSWORD, value: value })
}

export const submitOauth = (value = {}) => {
  const { fetch, FormData } = window
  const domain = `https://${value.hostname}`
  const apps = new FormData()
  apps.append('client_name', 'mammoth')
  apps.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  apps.append('scopes', 'read write follow')

  fetch(`${domain}/api/v1/apps`, {
    mode: 'cors',
    method: 'post',
    body: apps
  })
  .then((response1) => {
    return response1.json()
  })
  .then((appsToken) => {
    Dispatcher.dispatch({ type: UPDATE_RESULT, value: 'SUCCESS: Create Apps Token' })

    const oauthToken = new FormData()
    oauthToken.append('client_id', appsToken.client_id)
    oauthToken.append('client_secret', appsToken.client_secret)
    oauthToken.append('grant_type', 'password')
    oauthToken.append('username', value.email)
    oauthToken.append('password', value.password)
    oauthToken.append('scope', 'read write follow')

    fetch(`${domain}/oauth/token`, {
      mode: 'cors',
      method: 'post',
      body: oauthToken
    })
    .then((response2) => {
      return response2.json()
    })
    .then((accessToken) => {
      Dispatcher.dispatch({ type: UPDATE_RESULT, value: 'SUCCESS: Create Access Token' })

      ipcRenderer.send(CREATE_INSTANCE, {
        domain: domain,
        apps: appsToken,
        access: accessToken
      })
    })
    .catch((error2) => {
      Dispatcher.dispatch({ type: UPDATE_RESULT, value: 'ERROR: /oauth/token' })
      throw error2
    })
  })
  .catch((error1) => {
    Dispatcher.dispatch({ type: UPDATE_RESULT, value: 'ERROR: /api/v1/apps' })
    throw error1
  })
}
