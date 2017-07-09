import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as mastodon from '../mastodon/home'
import Account from '../component/account'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accounts: []
    }
  }

  componentDidUpdate () {
    console.log('home', this.state)
  }

  componentWillMount () {
    this._getMyAccounts(this.props.users)
  }

  componentWillReceiveProps (nextProps) {
    this._getMyAccounts(nextProps.users)
  }

  _getMyAccounts (users) {
    Promise.all(users.map(user => {
      return mastodon.getMyAccount(user)
    }))
    .then(accounts => {
      this.setState({ accounts: accounts })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {this.state.accounts.map((account, index) => (
            <li key={index}><Account {...account} /></li>
          ))}
        </ul>
        <p><Link to='/register'>Authorization</Link></p>
      </div>
    )
  }
}
