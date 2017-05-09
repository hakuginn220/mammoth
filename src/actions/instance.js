import { dispatch } from '../dispatcher'

export const ADD_INSTANCE_LIST = 'ADD_INSTANCE_LIST'
export const REMOVE_INSTANCE_LIST = 'REMOVE_INSTANCE_LIST'

export function addInstanceList (value = {}) {
  dispatch(ADD_INSTANCE_LIST, value)
}

export function removeInstanceList (index = 0) {
  dispatch(REMOVE_INSTANCE_LIST, index)
}
