import path from 'path'
import fs from 'fs-extra'
import { app } from 'electron'

export default class MainStore {
  constructor () {
    this._pathApps = path.join(app.getPath('userData'), 'apps.json')
    this._pathUsers = path.join(app.getPath('userData'), 'users.json')

    let _apps = fs.readJsonSync(this._pathApps, { throws: false })
    if (_apps === null) _apps = []
    this.apps = _apps

    let _users = fs.readJsonSync(this._pathUsers, { throws: false })
    if (_users === null) _users = []
    this.users = _users
  }

  addAccounts (value) {
    this.users.push(value)
    this.save()
  }

  addApps (value) {
    this.apps.push(value)
    this.save()
  }

  clear () {
    this.users = []
    this.apps = []
    this.save()
  }

  save () {
    fs.writeJsonSync(this._pathUsers, this.users)
    fs.writeJsonSync(this._pathApps, this.apps)
  }

  sync () {
    const { apps, users } = this
    return { apps, users }
  }
}
