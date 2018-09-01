import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import Account from '@/component/account'
import * as mastodon from '@/mastodon/home'

export default observer(
  class Home extends Component {
    constructor(props) {
      super(props)

      this.state = {
        accounts: []
      }
    }

    componentDidUpdate() {
      console.log('home', this.state)
    }

    componentDidMount() {
      this._getMyAccounts(this.props.users)
    }

    componentWillReceiveProps(nextProps) {
      this._getMyAccounts(nextProps.users)
    }

    _getMyAccounts(users) {
      Promise.all(users.map(user => mastodon.getMyAccount(user)))
        .then(accounts => {
          this.setState({ accounts: accounts })
        })
        .catch(error => {
          console.log(error)
        })
    }

    render() {
      return (
        <div>
          <h1>Home</h1>
          <ul>
            {this.state.accounts.map((account, id) => (
              <li key={id}>
                <Link to={`/timeline/${id}`}>
                  Timeline/
                  {id}
                </Link>
                <Account {...account} />
              </li>
            ))}
            <li key="register">
              <Link to="/register">Add Account</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
)
