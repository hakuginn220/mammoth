import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'

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
  componentWillMount () {
    ipcRenderer.on('callback', (e, value) => {
      console.log(value)
    })
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/code' component={RegisterCode} />
        </Switch>
      </HashRouter>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
