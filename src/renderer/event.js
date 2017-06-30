import { ipcRenderer } from 'electron'

import * as ipc from '../share/ipc'
import * as api from './utils/api'

export default class RendererEvent {
  constructor (store) {
    this.store = store
  }

  onChangeLoginHostname (event) {
    this.store.login.onChangeHostname(event.target.value)
  }

  onChangeLoginUser (event) {
    this.store.login.onChangeUser(event.target.value)
  }

  onChangeLoginPassword (event) {
    this.store.login.onChangePassword(event.target.value)
  }

  onSubmitLogin () {
    const { hostname, user, password } = this.store.login
    this.store.login.onErrorMessage('')
    api.apps({ hostname }).then(apps => {
      api.oauthToken({ hostname, user, password }, apps).then(oauthToken => {
        api.accountsVerifyCredentials({ hostname }, oauthToken).then(account => {
          ipcRenderer.send(ipc.ADD_USER, { apps, oauthToken, account })
        }).catch(error => {
          this.store.login.onErrorMessage(error.message)
          throw error
        })
      }).catch(error => {
        this.store.login.onErrorMessage(error.message)
        throw error
      })
    }).catch(error => {
      this.store.login.onErrorMessage(error.message)
      throw error
    })
  }
}
