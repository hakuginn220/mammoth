import { Map, Record } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as Action from '../actions/oauth'

const Instance = Record({
  title: '',
  url: '',
  email: '',
  description: ''
})

export default class OauthStore extends ReduceStore {
  getInitialState () {
    return Map({
      hostname: '',
      email: '',
      password: '',
      error: '',
      result: Instance()
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
        return state.set('result', Instance(action.value))
      case Action.UPDATE_ERROR:
        return state.set('error', action.value)
      default:
        return state
    }
  }
}
