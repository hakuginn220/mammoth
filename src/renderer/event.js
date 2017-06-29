import apps from './api/apps'

export default class RendererEvent {
  constructor (store) {
    this.store = store
  }

  onSubmitLogin () {
    this.store.login.onErrorMessage('')

    apps(this.store.login.hostname).then(response => {
      console.log(response)
    }).catch(error => {
      this.store.login.onErrorMessage(error.message)
      throw error
    })
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
}
