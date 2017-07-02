import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import Loading from '../component/loading'
import * as ipc from '../../share/ipc'

export default class Home extends Component {
  componentDidMount () {
    ipcRenderer.send(ipc.USERS_GET)
  }

  render () {
    return (
      <div>
        <Loading />
        <div>ユーザーが登録されていません</div>
        <div>インスタンスを指定してログイン認証してください</div>
        <div><Link to='/login'>ユーザーを認証する</Link></div>
      </div>
    )
  }
}
