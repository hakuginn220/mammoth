import { dispatch } from '../dispatcher'
import * as api from '../utils/api'

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

  api.apps(domain, (appsToken) => {
    if (appsToken === null) {
      dispatch(UPDATE_MESSAGE, `ERROR: ${domain}/api/v1/apps`)
    } else {
      dispatch(UPDATE_MESSAGE, 'SUCCESS: Create Apps Token')
      dispatch(UPDATE_APPS, appsToken)

      api.oauthToken(domain, value, appsToken, (accessToken) => {
        if (accessToken === null) {
          dispatch(UPDATE_MESSAGE, `ERROR: ${domain}/oauth/token`)
        } else {
          dispatch(UPDATE_MESSAGE, 'SUCCESS: Create Access Token')
          dispatch(UPDATE_ACCESSTOKEN, accessToken)
        }
      })
    }
  })
}
