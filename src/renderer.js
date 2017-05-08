import React, { Component } from 'react'
import { render } from 'react-dom'
import { Container } from 'flux/utils'
import { store, calculate } from './store'
import App from './components'

class View extends Component {
  static getStores () {
    return store
  }

  static calculateState (prevState) {
    return calculate()
  }

  render () {
    return <App {...this.state} />
  }
}

const ViewContainer = Container.create(View)

render(
  <ViewContainer />,
  document.getElementById('root')
)
