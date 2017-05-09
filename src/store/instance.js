import { List, Record } from 'immutable'
import { ReduceStore } from 'flux/utils'
import * as actions from '../actions/instance'

export default class InstanceStore extends ReduceStore {
  getInitialState () {
    return List()
  }

  reduce (state, action) {
    console.log(action)
    switch (action.type) {
      case actions.INSTANCE_ADD:
        return state.push(action.value)
      case actions.INSTANCE_REMOVE:
        return state.delete(action.value)
      default:
        return state
    }
  }
}
