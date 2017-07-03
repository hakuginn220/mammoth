import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../component/loading'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Loading />
        <div>No Accounts</div>
        <div><Link to='/login'>Authorization</Link></div>
      </div>
    )
  }
}
