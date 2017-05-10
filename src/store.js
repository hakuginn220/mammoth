import { fromJS } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from './actions'

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
      case actions.UPDATE_HISTORY_PATHNAME:
        return state.setIn(['history', 'pathname'], action.value)
      case actions.ADD_INSTANCE_LIST:
        return state.update('instance', (instance) => instance.push(action.value))
      case actions.REMOVE_INSTANCE_LIST:
        return state.update('instance', (instance) => instance.delete(action.value))
      case actions.UPDATE_OAUTH_MESSAGE:
        return state.setIn(['oauth', 'message'], action.value)
      case actions.UPDATE_OAUTH_DOMAIN:
        return state.setIn(['oauth', 'domain'], action.value)
      case actions.UPDATE_OAUTH_TOKEN:
        return state.setIn(['oauth', 'token'], action.value)
      default:
        return state
    }
  }
}
