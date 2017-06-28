import React from 'react'
import { render } from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import Store from './store'
import Event from './event'
import App from './app'

useStrict(true)

const store = new Store()
const event = new Event(store)

render(
  <Provider event={event}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
)
