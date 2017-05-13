import { dispatch } from './dispatcher'
import * as api from './utils/api'
import * as history from './utils/history'

export const PUSH_HISTORY = 'PUSH_HISTORY'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS'

export const push = (path = '/') => {
  dispatch(PUSH_HISTORY, history.parser(path))
}

export const oauth = async ({ hostname, email, password }) => {
  try {
    dispatch(UPDATE_MESSAGE, '')

    const apps = await api.apps({ hostname })

    const oauthToken = await api.oauthToken({ hostname, email, password }, apps)
    const { access_token } = oauthToken

    const accountsVerifyCredentials = await api.accountsVerifyCredentials({ hostname, access_token })
    const { id } = accountsVerifyCredentials

    dispatch(ADD_ACCOUNTS, { hostname, access_token, id })
    dispatch(PUSH_HISTORY, history.parser(`/timeline?hostname=${hostname}`))
  } catch (error) {
    dispatch(UPDATE_MESSAGE, `${error}`)
    throw error
  }
}
