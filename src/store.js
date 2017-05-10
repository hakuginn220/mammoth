import { fromJS, Map } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from './actions'

export default class Store extends ReduceStore {
  getInitialState () {
    return fromJS({
      history: {
        hash: '',
        pathname: '/',
        search: ''
      },
      instance: [],
      oauth: {
        message: ''
      }
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.PUSH_HISTORY:
        return state.set('history', Map(action.value))
      case actions.ADD_INSTANCE:
        return state.update('instance', (instance) => instance.push(Map(action.value)))
      case actions.REMOVE_INSTANCE:
        return state.update('instance', (instance) => instance.delete(action.value))
      case actions.UPDATE_OAUTH_MESSAGE:
        return state.setIn(['oauth', 'message'], action.value)
      default:
        return state
    }
  }
}
