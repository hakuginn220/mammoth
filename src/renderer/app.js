import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'
import DevTools from 'mobx-react-devtools'

import * as ipc from '../ipc'
import Home from './container/home'
import Login from './container/login'

injectGlobal`
  :root {
    --background-primary: #282c37;
    --text-primary: #ffffff;
  }
  ::selection {
    background: var(--text-primary);
    color: var(--background-primary);
  }
  body {
    margin: 0;
    font-family: sans-serif;
    background: var(--background-primary);
    color: var(--text-primary);
  }
  input,
  select,
  textarea {
    font-family: sans-serif;
  }
  a {
    color: var(--text-primary);
  }
`

export default class App extends Component {
  componentWillMount () {
    ipcRenderer.on(ipc.ADD_REGISTER_USER, (event, account) => {
      console.log(account)
      this.props.history.push('/')
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
