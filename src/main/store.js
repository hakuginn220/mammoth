import path from 'path'
import fs from 'fs-extra'
import { app, shell } from 'electron'
import { OAuth2 } from 'oauth'

export default class MainStore {
  constructor () {
    this._tempOauth = null
    this._tempHostname = null
    this._pathApps = path.join(app.getPath('userData'), 'apps.json')
    this._pathUsers = path.join(app.getPath('userData'), 'users.json')

    let _apps = fs.readJsonSync(this._pathApps, { throws: false })
    if (_apps === null) _apps = []
    this.apps = _apps

    let _users = fs.readJsonSync(this._pathUsers, { throws: false })
    if (_users === null) _users = []
    this.users = _users
  }

  startOauth (payload) {
    const { hostname, apps } = payload

    this._tempOauth = new OAuth2(
      apps.client_id,
      apps.client_secret,
      `https://${hostname}`,
      null,
      '/oauth/token'
    )

    const url = this._tempOauth.getAuthorizeUrl({
      redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      response_type: 'code',
      scope: 'read write follow'
    })

    shell.openExternal(url)
    this._tempHostname = hostname
    this.apps.push(payload)
    this.save()
  }

  endOauth (payload) {
    const { pincode } = payload

    const option = {
      grant_type: 'authorization_code',
      redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
    }

    this._tempOauth.getOAuthAccessToken(pincode, option, (error, accessToken) => {
      if (error) return

      const user = {
        hostname: this._tempHostname,
        accessToken: accessToken
      }

      this._tempOauth = null
      this._tempHostname = null
      this.users.push(user)
      this.save()
    })
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
