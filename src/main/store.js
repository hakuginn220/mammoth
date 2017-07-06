import path from 'path'
import fs from 'fs-extra'
import { app } from 'electron'

export default class MainStore {
  constructor () {
    this._path = app.getPath('userData')
    this._pathAccounts = path.join(this._path, 'accounts.json')
    this._pathApps = path.join(this._path, 'apps.json')

    let _accounts = fs.readJsonSync(this._pathAccounts, { throws: false })
    if (_accounts === null) _accounts = {}
    this.accounts = _accounts

    let _apps = fs.readJsonSync(this._pathApps, { throws: false })
    if (_apps === null) _apps = {}
    this.apps = _apps
  }

  addAccounts (key, value) {
    this.accounts[key] = value
  }

  addApps (key, value) {
    this.apps[key] = value
  }

  save () {
    fs.writeJsonSync(this._pathAccounts, this.accounts)
    fs.writeJsonSync(this._pathApps, this.apps)
    console.log('store@save', this)
  }

  clear () {
    this.accounts = {}
    this.apps = {}
    fs.removeSync(this._pathAccounts)
    fs.removeSync(this._pathApps)
    console.log('store@save', this)
  }
}
