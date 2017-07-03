import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import * as ipc from '../../common/ipc'

export default class Authorization extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hostname: '',
      message: ''
    }
  }

  bundleSubmit (event) {
    event.preventDefault()
    this.setState({ message: '' })

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
    })
    .then(response => response.json())
    .then(apps => {
      ipcRenderer.send(ipc.OAUTH_TOKEN, { hostname, apps })
      this.props.history.push('/authorization/pin')
    })
    .catch(error => {
      this.setState({ message: error.message })
    })
  }

  render () {
    return (
      <form onSubmit={(e) => this.bundleSubmit(e)}>
        <h1>Authorization</h1>
        <div>
          <label htmlFor='hostname'>Instance</label>
        </div>
        <div>
          <input
            type='text'
            name='hostname'
            placeholder='mastodon.cloud'
            value={this.state.hostname}
            onChange={e => this.setState({ hostname: e.target.value })}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
        <div>{this.state.message}</div>
        <Link to='/'>Back Home</Link>
      </form>
    )
  }
}
