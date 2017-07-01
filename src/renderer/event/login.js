import { ipcRenderer } from 'electron'

import store from '../store/login'
import * as api from '../utils/api'
import * as ipc from '../../share/ipc'

const loginEvent = {
  onChange (event) {
    store.onChange(event.target.value, event.target.name)
  },

  onSubmit () {
    const { hostname, user, password } = store
    store.onError('')
    api.apps({ hostname }).then(apps => {
      api.oauthToken({ hostname, user, password }, apps).then(oauthToken => {
        api.accountsVerifyCredentials({ hostname }, oauthToken).then(account => {
          ipcRenderer.send(ipc.ADD_USER, { hostname, apps, oauthToken, account })
        }).catch(error => {
          store.onError(error.message)
          throw error
        })
      }).catch(error => {
        store.onError(error.message)
        throw error
      })
    }).catch(error => {
      store.onError(error.message)
      throw error
    })
  }
}

export default loginEvent
