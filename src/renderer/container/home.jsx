import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import dispatch from '../dispatcher'
import * as action from '../../action'

export default class Home extends Component {
  componentDidMount () {
    dispatch(action.SYNC_STORE, {})
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
        <h2>No Accounts</h2>
        <p><Link to='/register'>Authorization</Link></p>
      </div>
    )
  }
}
