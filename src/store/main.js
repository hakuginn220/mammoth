import { Map } from 'immutable'
import { ReduceStore } from 'flux/utils'

export default class MainStore extends ReduceStore {
  getInitialState () {
    return Map({
      current: ''
    })
  }

  reduce (state, action) {
    switch (action.type) {
      default:
        return state
    }
  }
}
