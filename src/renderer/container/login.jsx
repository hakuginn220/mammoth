import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import * as ipc from '../../common/ipc'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hostname: '',
      message: '',
      authorization: ''
    }
  }

  bundleInstance (event) {
    event.preventDefault()
    const { hostname } = this.state
    const { fetch, FormData } = window

    const body = new FormData()
    body.append('client_name', document.title)
    body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
    body.append('scopes', 'read write follow')

    fetch(`https://${hostname}/api/v1/apps`, {
      method: 'POST',
      body: body,
      mode: 'cors'
    }).then(response => {
      return response.json()
    }).then(apps => {
      ipcRenderer.send(ipc.OAUTH_TOKEN, { hostname, apps })
    }).catch(error => {
      this.setState({ message: error.message })
    })
  }

  bundleAuthorization (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.bundleInstance(e)}>
          <div>
            <label>Instance
              <input
                type='text'
                name='hostname'
                placeholder='mastodon.cloud'
                value={this.state.hostname}
                onChange={e => this.setState({ hostname: e.target.value })}
              />
            </label>
          </div>
          <button type='submit'>Login</button>
        </form>
        <form onSubmit={(e) => this.bundleAuthorization(e)}>
          <div>
            <label>Authorization code
              <input
                type='password'
                name='authorization'
                value={this.state.authorization}
                onChange={e => this.setState({ authorization: e.target.value })}
              />
            </label>
          </div>
          <button type='submit'>Register</button>
        </form>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
