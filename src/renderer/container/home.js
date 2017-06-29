import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Home extends Component {
  render () {
    return (
      <div>
        <div>ユーザーが登録されていません</div>
        <div>インスタンスを指定してログイン認証してください</div>
        <div><Link to='/login'>ユーザーを認証する</Link></div>
      </div>
    )
  }
}

export default inject('event', 'store')(observer(Home))
