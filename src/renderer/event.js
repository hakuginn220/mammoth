import { ipcRenderer } from 'electron'

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
          const registerUser = { apps, oauthToken, account }
          ipcRenderer.send('ADD_REGISTER_USER', registerUser)
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
