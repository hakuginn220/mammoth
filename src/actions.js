import { dispatch } from './dispatcher'
import * as api from './utils/api'
import * as history from './utils/history'

export const PUSH_HISTORY = 'PUSH_HISTORY'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS'
export const ADD_TIMELINES = 'ADD_TIMELINES'

export const push = (path = '/') => {
  dispatch(PUSH_HISTORY, history.parser(path))
}

export const oauth = async ({ hostname, email, password }) => {
  try {
    dispatch(UPDATE_MESSAGE, '')

    const apps = await api.apps({ hostname })

    const oauthToken = await api.oauthToken({ hostname, email, password }, apps)
    const accessToken = oauthToken.access_token

    const accountsVerifyCredentials = await api.accountsVerifyCredentials({ hostname, accessToken })
    const { id, avatar } = accountsVerifyCredentials

    console.log(accountsVerifyCredentials)

    dispatch(ADD_ACCOUNTS, { hostname, accessToken, id, avatar })
    dispatch(PUSH_HISTORY, history.parser(`/timeline?hostname=${hostname}`))
  } catch (error) {
    dispatch(UPDATE_MESSAGE, `${error}`)
    throw error
  }
}

export const timeline = async (store) => {
  const search = history.search(store.getIn(['history', 'search']))

  const { hostname, accessToken } = store.get('accounts').find((current) => {
    return search.get('hostname') === current.get('hostname')
  }).toJS()

  try {
    const list = await api.timelinesHome({ hostname, accessToken })
    list.forEach((status) => {
      dispatch(ADD_TIMELINES, status)
    })
  } catch (error) {
    throw error
  }
}
