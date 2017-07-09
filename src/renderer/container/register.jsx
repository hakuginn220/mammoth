import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import dispatch from '../dispatcher'
import * as action from '../../action'
import * as mastodon from '../mastodon/register'

export default class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hostname: ''
    }
  }

  componentDidUpdate () {
    console.log('register', this.state)
  }

  componentDidMount () {
    ipcRenderer.on('dispatch', (e, value) => {
      if (value.type === action.START_OAUTH) {
        this.props.history.push('/register-code')
      }
    })
  }

  _submit (e) {
    e.preventDefault()
    const { hostname } = this.state
    mastodon.postApps({ hostname })
    .then(apps => { dispatch(action.START_OAUTH, { hostname, apps }) })
    .catch(error => { console.log(error) })
  }

  render () {
    return (
      <form onSubmit={(e) => this._submit(e)}>
        <h1>Register</h1>
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
        <p><Link to='/'>Back Home</Link></p>
      </form>
    )
  }
}
