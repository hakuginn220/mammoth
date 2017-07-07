import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import Loading from '../component/loading'
import * as ipc from '../../common/ipc'

import dispatch from '../dispatcher'
import * as action from '../../action'

export default class RegisterCode extends Component {
  constructor (props) {
    super(props)

    this.state = {
      code: '',
      message: '',
      wait: false
    }
  }

  componentWillMount () {
    ipcRenderer.on(ipc.AUTHORIZATION_CODE, (event, error) => {
      if (error) {
        const { error_description } = JSON.parse(error.data)
        this.setState({
          message: error_description,
          wait: false
        })
      } else {
        this.props.history.push('/')
      }
    })
  }

  componentDidMount () {
    dispatch(action.REGISTER_CODE_INIT, {})
  }

  bundleSubmit (event) {
    event.preventDefault()

    this.setState({
      message: '',
      wait: true
    })

    const { code } = this.state

    ipcRenderer.send(ipc.AUTHORIZATION_CODE, { code })
  }

  render () {
    if (this.state.wait) {
      return <Loading />
    } else {
      return (
        <form onSubmit={(e) => this.bundleSubmit(e)}>
          <h1>Authorization</h1>
          <h2>Pin Code</h2>
          <div>
            <input
              type='password'
              name='code'
              value={this.state.code}
              onChange={e => this.setState({ code: e.target.value })}
            />
            <button type='submit'>Register</button>
          </div>
          <p>{this.state.message}</p>
          <p><Link to='/authorization'>Back Instance</Link></p>
        </form>
      )
    }
  }
}
