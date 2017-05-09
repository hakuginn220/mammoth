import { Map } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from '../actions/history'

export default class HistoryStore extends ReduceStore {
  getInitialState () {
    return Map({
      pathname: '/',
      search: '',
      hash: ''
    })
  }

  reduce (state, action) {
    switch (action.type) {
      case actions.UPDATE_HISTORY_PATHNAME:
        return state.set('pathname', action.value)
      default:
        return state
    }
  }
}
