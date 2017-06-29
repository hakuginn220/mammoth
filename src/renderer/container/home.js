import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Home extends Component {
  render () {
    return (
      <div>
        <div>アカウントがありません。<Link to='/login'>ログインしてください</Link></div>
      </div>
    )
  }
}

export default inject('event', 'store')(observer(Home))
