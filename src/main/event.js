export default class MainEvent {
  constructor (store) {
    this.store = store
  }

  homeInit (e, value) {
    e.sender.send(value.type, this.store.accounts)
  }

  authorizationInit (e, value) {
    e.sender.send(value.type, this.store.apps)
  }
}
