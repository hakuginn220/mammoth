import { ipcRenderer } from 'electron'
import Dispatcher from '../dispatcher'
import * as Actions from '../actions/oauth'

export const changeHostname = (value = '') => {
  Dispatcher.dispatch({ type: Actions.CHANGE_HOSTNAME, value: value })
}

export const changeEmail = (value = '') => {
  Dispatcher.dispatch({ type: Actions.CHANGE_EMAIL, value: value })
}

export const changePassword = (value = '') => {
  Dispatcher.dispatch({ type: Actions.CHANGE_PASSWORD, value: value })
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
  .then((response1) => response1.json())
  .then((appsToken) => {
    Dispatcher.dispatch({ type: Actions.UPDATE_RESULT, value: 'SUCCESS: Create Apps Token' })

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
    .then((response2) => response2.json())
    .then((accessToken) => {
      Dispatcher.dispatch({ type: Actions.UPDATE_RESULT, value: 'SUCCESS: Create Access Token' })

      ipcRenderer.send(Actions.CREATE_INSTANCE, {
        domain: domain,
        apps: appsToken,
        access: accessToken
      })
    })
    .catch((error2) => {
      Dispatcher.dispatch({ type: Actions.UPDATE_RESULT, value: 'ERROR: /oauth/token' })
      throw error2
    })
  })
  .catch((error1) => {
    Dispatcher.dispatch({ type: Actions.UPDATE_RESULT, value: 'ERROR: /api/v1/apps' })
    throw error1
  })
}
