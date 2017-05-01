import React, { Component } from 'react'
import { render } from 'react-dom'
import { Container } from 'flux/utils'
import Dispatcher from './dispatcher'
import Views from './views'
import OauthStore from './store/oauth'

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
    return <Views {...this.state} />
  }
}

const RootContainer = Container.create(Root)

render(
  <RootContainer />,
  document.getElementById('root')
)
