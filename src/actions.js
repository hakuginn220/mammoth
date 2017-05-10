import { dispatch } from './dispatcher'
import * as api from './utils/api'

export const UPDATE_HISTORY_PATHNAME = 'UPDATE_HISTORY_PATHNAME'
export const ADD_INSTANCE_LIST = 'ADD_INSTANCE_LIST'
export const REMOVE_INSTANCE_LIST = 'REMOVE_INSTANCE_LIST'
export const UPDATE_OAUTH_DOMAIN = 'UPDATE_OAUTH_DOMAIN'
export const UPDATE_OAUTH_MESSAGE = 'UPDATE_OAUTH_MESSAGE'
export const UPDATE_OAUTH_TOKEN = 'UPDATE_OAUTH_TOKEN'

export function updateHistoryPathname (value = '/') {
  dispatch(UPDATE_HISTORY_PATHNAME, value)
}

export function addInstanceList (value = {}) {
  dispatch(ADD_INSTANCE_LIST, value)
}

export function removeInstanceList (index = 0) {
  dispatch(REMOVE_INSTANCE_LIST, index)
}

export async function submitOauthToken (value = {}) {
  const domain = `https://${value.hostname}`
  dispatch(UPDATE_OAUTH_DOMAIN, domain)

  try {
    const appsToken = await api.apps(domain)
    dispatch(UPDATE_OAUTH_MESSAGE, 'SUCCESS: Create Apps Token')
    const accessToken = await api.oauthToken(domain, value, appsToken)
    dispatch(UPDATE_OAUTH_MESSAGE, 'SUCCESS: Create Access Token')
    const token = Object.assign({}, { domain }, appsToken, accessToken)
    dispatch(UPDATE_OAUTH_TOKEN, token)
  } catch (error) {
    dispatch(UPDATE_OAUTH_MESSAGE, `${error}`)
    throw error
  }
}
