import path from 'path'
import { app } from 'electron'
import { action, extendObservable } from 'mobx'

export default class MainStore {
  constructor () {
    this._path = app.getPath('userData')
    this._pathAccount = path.join(this._path, 'accounts.json')
    this._pathApps = path.join(this._path, 'apps.json')

    extendObservable(this, {
      accounts: {},
      apps: {},

      addAccount: action((key, value) => {
        this.accounts[key] = value
      }),

      addApps: action((key, value) => {
        this.apps[key] = value
      }),

      get getAccount () {
        if (this.accounts[this._hostname]) {
          return this.accounts[this._hostname]
        } else {
          return null
        }
      },
      set getAccount (value) {
        this._hostname = value
      },

      get getApps () {
        if (this.apps[this._hostname]) {
          return this.apps[this._hostname]
        } else {
          return null
        }
      },
      set getApps (value) {
        this._hostname = value
      }
    })
  }

  save () {
    console.log(this.accounts)
    console.log(this.apps)
  }
}
