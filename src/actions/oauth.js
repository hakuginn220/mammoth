import { dispatch } from '../dispatcher'

export const CHANGE_HOSTNAME = 'OAUTH_CHANGE_HOSTNAME'
export const CHANGE_EMAIL = 'OAUTH_CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'OAUTH_CHANGE_PASSWORD'
export const UPDATE_MESSAGE = 'OAUTH_UPDATE_MESSAGE'
export const UPDATE_DOMAIN = 'OAUTH_UPDATE_DOMAIN'
export const UPDATE_APPS = 'OAUTH_UPDATE_APPS'
export const UPDATE_ACCESSTOKEN = 'OAUTH_UPDATE_ACCESSTOKEN'

export function changeHostname (value = '') {
  dispatch(CHANGE_HOSTNAME, value)
}

export function changeEmail (value = '') {
  dispatch(CHANGE_EMAIL, value)
}

export function changePassword (value = '') {
  dispatch(CHANGE_PASSWORD, value)
}

export function submitOauth (value = {}) {
  const domain = `https://${value.hostname}`
  dispatch(UPDATE_DOMAIN, domain)

  const apps = new window.FormData()
  apps.append('client_name', 'mammoth')
  apps.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  apps.append('scopes', 'read write follow')

  window.fetch(`${domain}/api/v1/apps`, {
    mode: 'cors',
    method: 'post',
    body: apps
  })
  .then((response1) => response1.json())
  .then((appsToken) => {
    dispatch(UPDATE_MESSAGE, 'SUCCESS: Create Apps Token')
    dispatch(UPDATE_APPS, appsToken)

    const oauthToken = new window.FormData()
    oauthToken.append('client_id', appsToken.client_id)
    oauthToken.append('client_secret', appsToken.client_secret)
    oauthToken.append('grant_type', 'password')
    oauthToken.append('username', value.email)
    oauthToken.append('password', value.password)
    oauthToken.append('scope', 'read write follow')

    window.fetch(`${domain}/oauth/token`, {
      mode: 'cors',
      method: 'post',
      body: oauthToken
    })
    .then((response2) => response2.json())
    .then((accessToken) => {
      dispatch(UPDATE_MESSAGE, 'SUCCESS: Create Access Token')
      dispatch(UPDATE_ACCESSTOKEN, accessToken)
    })
    .catch((error2) => {
      dispatch(UPDATE_MESSAGE, `ERROR: ${domain}/oauth/token`)
      throw error2
    })
  })
  .catch((error1) => {
    dispatch(UPDATE_MESSAGE, `ERROR: ${domain}/api/v1/apps`)
    throw error1
  })
}
