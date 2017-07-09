import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'

import dispatch from './dispatcher'
import * as action from '../action'

import Home from './container/home'
import Register from './container/register'
import RegisterCode from './container/register-code'

injectGlobal`
  ::selection {
    background: rgba(0, 0, 0, 0.2);
  }
  html {
    font-family: sans-serif;
    font-size: 16px;
    color: #333333;
  }
  input,
  select,
  textarea,
  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      apps: []
    }
  }

  componentDidUpdate () {
    console.log('app', this.state)
  }

  componentDidMount () {
    ipcRenderer.on('dispatch', (e, value) => {
      this.setState(value.payload)
    })

    dispatch(action.SYNC_STORE, {})
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={() => <Home {...this.state} />} />
          <Route exact path='/register' render={() => <Register {...this.state} />} />
          <Route exact path='/register/code' render={() => <RegisterCode {...this.state} />} />
        </Switch>
      </HashRouter>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
