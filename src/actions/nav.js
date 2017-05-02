import { dispatch } from '../dispatcher'

export const SELECT_INSTANCE = 'NAV_SELECT_INSTANCE'
export const OAUTH_INSTANCE = 'NAV_OAUTH_INSTANCE'

export const selectInstance = (value = '') => {
  dispatch(SELECT_INSTANCE, value)
}

export const oauthInstance = (value = '') => {
  dispatch(OAUTH_INSTANCE, value)
}
