import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import * as ipc from '../../share/ipc'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hostname: '',
      code: ''
    }
  }

  componentWillMount () {
    ipcRenderer.on(ipc.OAUTH_TOKEN, (event, value) => {
      console.log(ipc.OAUTH_TOKEN, value)
      this.props.history.push('/')
    })
  }

  componentDidUnmount () {
    ipcRenderer.removeListener(ipc.OAUTH_TOKEN)
  }

  bundleSubmit (event) {
    event.preventDefault()
    const { hostname } = this.state
    ipcRenderer.send(ipc.OAUTH_TOKEN, { hostname })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.bundleSubmit.bind(this)}>
          <label>インスタンス
            <input
              type='text'
              name='hostname'
              placeholder='mastodon.cloud'
              value={this.state.hostname}
              onChange={e => this.setState({ hostname: e.target.value })}
            />
          </label>
          <button type='submit'>ログイン</button>
        </form>
        <Link to='/'>戻る</Link>
      </div>
    )
  }
}
