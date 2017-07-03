import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Home from './container/home'
import Login from './container/login'

injectGlobal`
  ::selection {
    background: rgba(255, 255, 125, 0.99);
  }
  html {
    font-family: sans-serif;
    font-size: 16px;
  }
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 1rem;
  }
`

class App extends Component {
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
