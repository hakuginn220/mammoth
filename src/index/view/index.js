import React, { Component } from 'react'
import Dispatcher from '../dispatcher'
import Store from '../store'
import App from '../component'

const store = new Store(Dispatcher)

export default class View extends Component {
  static getStores () {
    return [store]
  }

  static calculateState (prevState) {
    return store.getState()
  }

  render () {
    console.log(this.state)
    return <App {...this.state} />
  }
}
