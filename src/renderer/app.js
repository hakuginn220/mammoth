import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Home from '@/container/home'
import Register from '@/container/register'
import RegisterCode from '@/container/register-code'
import Timeline from '@/container/timeline'

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

export default observer(
  class App extends Component {
    render() {
      return (
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} {...this.props.store} />}
            />
            } />
            <Route
              path="/register"
              render={props => <Register {...props} {...this.props.store} />}
            />
            <Route
              path="/register-code"
              render={props => (
                <RegisterCode {...props} {...this.props.store} />
              )}
            />
            <Route
              path="/timeline/:id"
              render={props => <Timeline {...props} {...this.props.store} />}
            />
          </Switch>
        </HashRouter>
      )
    }
  }
)
