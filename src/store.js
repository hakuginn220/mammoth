import { fromJS } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as history from './actions/history'
import * as instance from './actions/instance'
import * as oauth from './actions/oauth'

export default class Store extends ReduceStore {
  getInitialState () {
    return fromJS({
      history: {
        pathname: '/',
        search: '',
        hash: ''
      },
      instance: [],
      oauth: {
        message: '',
        domain: '',
        token: {}
      }
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case history.UPDATE_HISTORY_PATHNAME:
        return state.setIn('history', 'pathname', action.value)
      case instance.INSTANCE_ADD:
        return state.update('instance', (instance) => instance.push(action.value))
      case instance.INSTANCE_REMOVE:
        return state.update('instance', (instance) => instance.delete(action.value))
      case oauth.UPDATE_OAUTH_MESSAGE:
        return state.setIn('oauth', 'message', action.value)
      case oauth.UPDATE_OAUTH_DOMAIN:
        return state.setIn('oauth', 'domain', action.value)
      case oauth.UPDATE_OAUTH_TOKEN:
        return state.setIn('oauth', 'token', action.value)
      default:
        return state
    }
  }
}
