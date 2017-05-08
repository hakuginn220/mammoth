import { dispatch } from '../dispatcher'

export const PUSH = 'HISTORY_PUSH'

export function push (value = '/') {
  dispatch(PUSH, value.replace('file://', ''))
}
