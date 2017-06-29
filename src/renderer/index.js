import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import Store, { initialState } from './store'
import Event from './event'
import App from './app'

useStrict(true)

const store = new Store(initialState)
const event = new Event(store)

render(
  <Provider event={event} store={store}>
    <HashRouter hashType='hashbang'>
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
