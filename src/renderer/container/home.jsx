import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <div>No Accounts</div>
        <div><Link to='/authorization'>Authorization</Link></div>
      </div>
    )
  }
}
