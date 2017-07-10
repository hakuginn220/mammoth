import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ipcRenderer } from 'electron'

import Store from './store'
import dispatch from './dispatcher'
import * as action from '../action'

import Home from './container/home'
import Register from './container/register'
import RegisterCode from './container/register-code'
import Timeline from './container/timeline'

const store = new Store({ users: [], apps: [] })

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
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' render={props => <Home {...props} {...this.state} />} />
            <Route path='/register' render={props => <Register {...props} {...this.state} />} />
            <Route path='/register-code' render={props => <RegisterCode {...props} {...this.state} />} />
            <Route path='/timeline/:id' render={props => <Timeline {...props} {...this.state} />} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
