import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Authorization from './container/authorization'
import AuthorizationPin from './container/authorization-pin'
import Home from './container/home'

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

render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/authorization' component={Authorization} />
      <Route exact path='/authorization/pin' component={AuthorizationPin} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)
