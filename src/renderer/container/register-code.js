import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import dispatch from '@/dispatcher'
import * as action from 'common/action'

export default observer(
  class RegisterCode extends Component {
    constructor(props) {
      super(props)

      this.state = {
        pincode: ''
      }
    }

    componentDidUpdate() {
      console.log('register-code', this.state)
    }

    componentDidMount() {
      ipcRenderer.on('dispatch', (e, value) => {
        if (value.type === action.END_OAUTH) {
          this.props.history.push('/')
        }
      })
    }

    _submit(event) {
      event.preventDefault()
      const { pincode } = this.state
      dispatch(action.END_OAUTH, { pincode })
    }

    render() {
      return (
        <form onSubmit={e => this._submit(e)}>
          <h1>Register</h1>
          <h2>Pin Code</h2>
          <div>
            <input
              type="password"
              name="pincode"
              value={this.state.pincode}
              onChange={e => this.setState({ pincode: e.target.value })}
            />
            <button type="submit">Register</button>
          </div>
          <p>
            <Link to="/">Back Home</Link>
          </p>
        </form>
      )
    }
  }
)
