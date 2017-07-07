import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
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
