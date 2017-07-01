import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import App from './app'

import loginStore from './store/login'
import loginEvent from './event/login'

useStrict(true)

render(
  <Provider loginEvent={loginEvent} loginStore={loginStore}>
    <HashRouter>
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
