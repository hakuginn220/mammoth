export default class RendererEvent {
  constructor (store) {
    this.store = store
  }

  onSubmitLogin () {
    const Store = this.store.login
    console.log(Store.instance)
    console.log(Store.user)
    console.log(Store.password)
  }

  onChangeLoginInstance (event) {
    this.store.login.onChangeInstance(event.target.value)
  }

  onChangeLoginUser (event) {
    this.store.login.onChangeUser(event.target.value)
  }

  onChangeLoginPassword (event) {
    this.store.login.onChangePassword(event.target.value)
  }
}
