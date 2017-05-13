import { fromJS, Map } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from './actions'

const store = {
  history: {
    hash: '',
    pathname: '/',
    search: ''
  },
  instance: [],
  oauth: {
    message: ''
  }
}

const { localStorage } = window

if (localStorage.getItem('store') === null) {
  localStorage.setItem('store', JSON.stringify(store))
}

export default class Store extends ReduceStore {
  getInitialState () {
    return fromJS(JSON.parse(localStorage.getItem('store')))
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.PUSH_HISTORY:
        return state.set('history', Map(action.value))
      case actions.OAUTH_MESSAGE:
        return state.setIn(['oauth', 'message'], action.value)
      case actions.ADD_INSTANCE:
        return state.update('instance', (instance) => instance.push(Map(action.value)))
      case actions.REMOVE_INSTANCE:
        return state.update('instance', (instance) => instance.delete(action.value))
      default:
        return state
    }
  }
}
