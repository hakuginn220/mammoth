import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'

import initEvent from './event'
import Home from './container/home'
import Login from './container/login'
import * as ipc from '../share/ipc'

injectGlobal`
  ::selection {
    background: rgba(255, 255, 125, 0.99);
  }
  html,
  input,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 16px;
  }
`

class App extends Component {
  componentDidMount () {
    initEvent()

    ipcRenderer.send(ipc.INSTANCE_REQUEST, { hostname: 'mstdn.jp' })
    ipcRenderer.on(ipc.INSTANCE_COMPLETE, (event, value) => {
      console.log(ipc.INSTANCE_COMPLETE, value)
    })
    ipcRenderer.on(ipc.INSTANCE_ERROR, () => {
      console.log(ipc.INSTANCE_ERROR)
    })
    ipcRenderer.on(ipc.USER_ADD, () => {
      console.log(ipc.USER_ADD)
      this.props.history.push('/')
    })
    ipcRenderer.on(ipc.USER_REMOVE, () => {
      console.log(ipc.USER_REMOVE)
      this.props.history.push('/')
    })
    ipcRenderer.on(ipc.USERS_GET, (event, users) => {
      console.log(ipc.USERS_GET)
      console.log(users)
    })
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}

render(
  <HashRouter>
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root')
)
