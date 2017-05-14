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

    dispatch(ADD_ACCOUNTS, { hostname, accessToken, id, avatar })
    dispatch(PUSH_HISTORY, history.parser(`/timeline?hostname=${hostname}`))
  } catch (error) {
    dispatch(UPDATE_MESSAGE, `${error}`)
    throw error
  }
}

export const timeline = async (store) => {
  const search = history.search(store.getIn(['history', 'search']))

  const account = store.get('accounts').find((value) => {
    return search.get('hostname') === value.get('hostname')
  })

  const { hostname, accessToken } = account.toJS()

  /*
  try {
    const list = await api.timelinesPublic({ hostname, accessToken })

    list.reverse().forEach((status) => dispatch(ADD_TIMELINES, status))
  } catch (error) {
    throw error
  }
  */

  const { WebSocket } = window
  const stream = new WebSocket(`ws://${hostname}/api/v1/streaming?access_token=${accessToken}&stream=public`)
  stream.addEventListener('close', (event) => {
    console.log(event)
  })
  stream.addEventListener('error', (event) => {
    console.log(event)
    stream.close()
  })
  stream.addEventListener('open', (event) => {
    console.log(event)
  })
  stream.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (message.event === 'update') {
      dispatch(ADD_TIMELINES, JSON.parse(message.payload))
    }
  })
}
