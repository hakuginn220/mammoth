// import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import { List } from '../action'

export default class Store extends ReduceStore {
  getInitialState () {
    return {
      oauth_value: '',
      oauth_result: {},
      oauth_error: '',
      oauth_action: ''
    }
  }

  reduce (state, action) {
    switch (action.type) {
      case List.OAUTH_UPDATE_VALUE:
        return { oauth_value: action.value }
      case List.OAUTH_UPDATE_RESULT:
        return { oauth_result: action.value }
      case List.OAUTH_UPDATE_ERROR:
        return { oauth_error: action.value }
      case List.OAUTH_UPDATE_ACTION:
        return { oauth_action: action.value }
      default:
        return state
    }
  }
}
