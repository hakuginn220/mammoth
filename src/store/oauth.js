import { Map } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as Actions from '../actions/oauth'

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
      case Actions.CHANGE_HOSTNAME:
        return state.set('hostname', action.value)
      case Actions.CHANGE_EMAIL:
        return state.set('email', action.value)
      case Actions.CHANGE_PASSWORD:
        return state.set('password', action.value)
      case Actions.UPDATE_RESULT:
        return state.set('result', action.value)
      default:
        return state
    }
  }
}
