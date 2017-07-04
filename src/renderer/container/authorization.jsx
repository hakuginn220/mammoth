import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import Loading from '../component/loading'
import * as ipc from '../../common/ipc'

export default class Authorization extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hostname: '',
      message: '',
      wait: false
    }
  }

  componentWillMount () {
    ipcRenderer.on(ipc.AUTHORIZATION, (event) => {
      this.props.history.push('/authorization/code')
    })
  }

  bundleSubmit (event) {
    event.preventDefault()

    this.setState({
      message: '',
      wait: true
    })

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
      ipcRenderer.send(ipc.AUTHORIZATION, { hostname, apps })
    })
    .catch(error => {
      this.setState({
        message: error.message,
        wait: false
      })
    })
  }

  render () {
    if (this.state.wait) {
      return <Loading />
    } else {
      return (
        <form onSubmit={(e) => this.bundleSubmit(e)}>
          <h1>Authorization</h1>
          <h2>Instance Select</h2>
          <div>
            <input
              type='text'
              name='hostname'
              placeholder='mastodon.cloud'
              value={this.state.hostname}
              onChange={e => this.setState({ hostname: e.target.value })}
            />
            <button type='submit'>Login</button>
          </div>
          <p>{this.state.message}</p>
          <p><Link to='/'>Back Home</Link></p>
        </form>
      )
    }
  }
}
