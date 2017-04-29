import React, { Component } from 'react'
import { render } from 'react-dom'
import { Container } from 'flux/utils'
import Dispatcher from './dispatcher'
import App from './components'
import OauthStore from './stores/oauth'

const oauth = new OauthStore(Dispatcher)

class Root extends Component {
  static getStores () {
    return [oauth]
  }

  static calculateState (prevState) {
    return {
      oauth: oauth.getState()
    }
  }

  render () {
    console.log(this.state.oauth.toJSON())
    return <App {...this.state} />
  }
}

const RootContainer = Container.create(Root)

render(
  <RootContainer />,
  document.getElementById('root')
)
