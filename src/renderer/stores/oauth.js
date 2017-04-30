import { Map } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as Action from '../actions/oauth'

export default class OauthStore extends ReduceStore {
  getInitialState () {
    return Map({
      hostname: '',
      email: '',
      password: '',
      result: ''
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case Action.CHANGE_HOSTNAME:
        return state.set('hostname', action.value)
      case Action.CHANGE_EMAIL:
        return state.set('email', action.value)
      case Action.CHANGE_PASSWORD:
        return state.set('password', action.value)
      case Action.UPDATE_RESULT:
        return state.set('result', action.value)
      default:
        return state
    }
  }
}
