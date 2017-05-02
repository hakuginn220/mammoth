import { List } from 'immutable'
import { ReduceStore } from 'flux/utils'

export default class NavStore extends ReduceStore {
  getInitialState () {
    return List()
  }

  reduce (state, action) {
    switch (action.type) {
      default:
        return state
    }
  }
}
