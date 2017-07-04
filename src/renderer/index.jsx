import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Authorization from './container/authorization'
import AuthorizationCode from './container/authorization-code'
import Home from './container/home'

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

render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/authorization' component={Authorization} />
      <Route exact path='/authorization/code' component={AuthorizationCode} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)
