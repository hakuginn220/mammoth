import { Map, Record } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from '../actions/oauth'

const apps = Record({
  client_id: '',
  client_secret: '',
  id: 0,
  redirect_uri: ''
})

const accessToken = Record({
  access_token: '',
  created_at: 0,
  scope: '',
  token_type: ''
})

export default class OauthStore extends ReduceStore {
  getInitialState () {
    return Map({
      hostname: '',
      email: '',
      password: '',
      message: '',
      domain: '',
      apps: apps(),
      accessToken: accessToken()
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.CHANGE_HOSTNAME:
        return state.set('hostname', action.value)
      case actions.CHANGE_EMAIL:
        return state.set('email', action.value)
      case actions.CHANGE_PASSWORD:
        return state.set('password', action.value)
      case actions.UPDATE_MESSAGE:
        return state.set('message', action.value)
      case actions.UPDATE_DOMAIN:
        return state.set('domain', action.value)
      case actions.UPDATE_APPS:
        return state.set('apps', apps(action.value))
      case actions.UPDATE_ACCESSTOKEN:
        return state.set('accessToken', accessToken(action.value))
      default:
        return state
    }
  }
}
