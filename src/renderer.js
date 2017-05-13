import React, { Component } from 'react'
import { render } from 'react-dom'
import { Container } from 'flux/utils'
import dispatcher from './dispatcher'
import Store from './store'
import App from './templates/app'

const { localStorage, addEventListener } = window
const store = new Store(dispatcher)

addEventListener('beforeunload', () => {
  localStorage.setItem('store', JSON.stringify(store.getState().toJS()))
})

class View extends Component {
  static getStores () {
    return [store]
  }

  static calculateState (prevState) {
    return {
      store: store.getState()
    }
  }

  render () {
    console.log(this.state.store.toJS())
    return <App {...this.state} />
  }
}

const ViewContainer = Container.create(View)

render(
  <ViewContainer />,
  document.getElementById('root')
)
