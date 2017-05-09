import { dispatch } from '../dispatcher'

export const UPDATE_HISTORY_PATHNAME = 'UPDATE_HISTORY_PATHNAME'

export function updateHistoryPathname (value = '/') {
  dispatch(UPDATE_HISTORY_PATHNAME, value)
}
