import { Map, Record } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from '../actions/oauth'

export default class OauthStore extends ReduceStore {
  getInitialState () {
    return Map({
      message: '',
      domain: '',
      token: {}
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.UPDATE_OAUTH_MESSAGE:
        return state.set('message', action.value)
      case actions.UPDATE_OAUTH_DOMAIN:
        return state.set('domain', action.value)
      case actions.UPDATE_OAUTH_TOKEN:
        return state.set('token', action.value)
      default:
        return state
    }
  }
}
