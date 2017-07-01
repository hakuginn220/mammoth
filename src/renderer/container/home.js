import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { ipcRenderer } from 'electron'

import * as ipc from '../../share/ipc'

class Home extends Component {
  componentDidMount () {
    ipcRenderer.send(ipc.GET_USERS)
  }
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

export default observer(Home)
