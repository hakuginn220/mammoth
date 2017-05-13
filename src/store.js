import { ReduceStore } from 'flux/utils'
import { fromJS, Map } from 'immutable'
import * as actions from './actions'

const { localStorage } = window

// development
// localStorage.clear()

if (localStorage.getItem('store') === null) {
  localStorage.setItem('store', JSON.stringify({
    history: {
      hash: '',
      pathname: '/',
      search: ''
    },
    accounts: [],
    timelines: [],
    message: ''
  }))
}

export default class Store extends ReduceStore {
  getInitialState () {
    return fromJS(JSON.parse(localStorage.getItem('store')))
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.PUSH_HISTORY:
        return state.set('history', Map(action.value))
      case actions.UPDATE_MESSAGE:
        return state.set('message', action.value)
      case actions.ADD_ACCOUNTS:
        return state.update('accounts', (list) => list.push(Map(action.value)))
      case actions.ADD_TIMELINES:
        return state.update('timelines', (list) => list.push(fromJS(action.value)))
      default:
        return state
    }
  }
}
