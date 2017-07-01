import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'
import DevTools from 'mobx-react-devtools'

import Home from './container/home'
import Login from './container/login'
import * as ipc from '../share/ipc'

injectGlobal`
  ::selection {
    background: black;
    color: white;
  }
  html {
    font-family: sans-serif;
    font-size: 16px;
  }
  input,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 16px;
  }
`

class App extends Component {
  componentDidMount () {
    ipcRenderer.on(ipc.ADD_USER, () => {
      console.log(ipc.ADD_USER)
      this.props.history.push('/')
    })
    ipcRenderer.on(ipc.REMOVE_USER, () => {
      console.log(ipc.REMOVE_USER)
      this.props.history.push('/')
    })
    ipcRenderer.on(ipc.GET_USERS, (event, users) => {
      console.log(ipc.GET_USERS)
      console.log(users)
    })
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Redirect push to='/' />
        </Switch>
        <DevTools />
      </div>
    )
  }
}

export default observer(App)
