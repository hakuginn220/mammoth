import { dispatch } from './dispatcher'
import * as api from './utils/api'
import * as history from './utils/history'

export const PUSH_HISTORY = 'PUSH_HISTORY'
export const ADD_INSTANCE = 'ADD_INSTANCE'
export const REMOVE_INSTANCE = 'REMOVE_INSTANCE'
export const UPDATE_OAUTH_MESSAGE = 'UPDATE_OAUTH_MESSAGE'

export const push = (path = '/') => {
  dispatch(PUSH_HISTORY, history.parser(path))
}

export const submitOauth = async (input = {}) => {
  dispatch(UPDATE_OAUTH_MESSAGE, '')
  try {
    const appsToken = await api.postApps(input)
    const accessToken = await api.postOauthToken(input, appsToken)
    const instance = Object.assign({ hostname: input.hostname }, appsToken, accessToken)
    addInstance(instance)
  } catch (error) {
    dispatch(UPDATE_OAUTH_MESSAGE, `${error}`)
    throw error
  }
}

export const addInstance = (instance = {}) => {
  dispatch(ADD_INSTANCE, instance)
  push(`/timeline?search=${instance.hostname}`)
}

export const removeInstance = (index = 0) => {
  dispatch(REMOVE_INSTANCE, index)
}
