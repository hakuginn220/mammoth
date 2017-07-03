import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AuthorizationPin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pincode: '',
      message: ''
    }
  }

  bundleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={(e) => this.bundleSubmit(e)}>
        <h1>Authorization</h1>
        <div>
          <label htmlFor='pincode'>Pin Code</label>
        </div>
        <div>
          <input
            type='password'
            name='pincode'
            value={this.state.pincode}
            onChange={e => this.setState({ pincode: e.target.value })}
          />
        </div>
        <div>
          <button type='submit'>Register</button>
        </div>
        <Link to='/authorization'>Back Instance</Link>
      </form>
    )
  }
}
