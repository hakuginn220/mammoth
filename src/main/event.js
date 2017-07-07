export default class MainEvent {
  constructor (store) {
    this._name = 'callback'
    this.store = store
  }

  homeInit (e, value) {
    const { type } = value

    e.sender.send(this._name, { type, payload: this.store.accounts })
  }

  registerInit (e, value) {
    const { type } = value

    e.sender.send(this._name, { type, payload: this.store.apps })
  }

  registerSubmit (e, value) {
    const { type, payload } = value

    let apps = null

    this.store.apps.forEach((element) => {
      if (element.hostname === payload.hostname) {
        apps = element
      }
    })

    e.sender.send(this._name, { type, payload: apps })
  }

  registerCodeInit (e, value) {
    const { type, payload } = value

    e.sender.send(this._name, { type, payload })
  }
}
