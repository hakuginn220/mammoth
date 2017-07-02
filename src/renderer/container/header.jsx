import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div><Link to='/'>ホーム</Link></div>
        <div><Link to='/login'>アカウントを追加</Link></div>
      </div>
    )
  }
}
