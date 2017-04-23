import React, { Component } from 'react'
import OauthStore from '../store/oauth'
import App from '../component'

export default class View extends Component {
  static getStores () {
    return [OauthStore]
  }

  static calculateState (prevState) {
    return {
      oauth: OauthStore.getState()
    }
  }

  render () {
    console.log(this.state.oauth.toJSON())
    return <App {...this.state} />
  }
}
