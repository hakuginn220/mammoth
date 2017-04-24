import { Map, Record } from 'immutable'
import { ReduceStore } from 'flux/utils'
import Dispatcher from '../dispatcher'
import * as Action from '../action/oauth'

const Result = Record({
  title: '',
  url: '',
  email: '',
  description: ''
})

class OauthStore extends ReduceStore {
  getInitialState () {
    return Map({
      value: '',
      error: '',
      action: 0,
      result: Result()
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case Action.OAUTH_UPDATE_VALUE:
        return state.set('value', action.value)
      case Action.OAUTH_UPDATE_RESULT:
        return state.set('result', Result(action.value))
      case Action.OAUTH_UPDATE_ERROR:
        return state.set('error', action.value)
      case Action.OAUTH_UPDATE_ACTION:
        return state.set('action', action.value)
      default:
        return state
    }
  }
}

export default new OauthStore(Dispatcher)
