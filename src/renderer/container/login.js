import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Login extends Component {
  handleSubmit (event) {
    event.preventDefault()
    this.props.event.onSubmitLogin()
  }

  handleHostname (event) {
    this.props.event.onChangeLoginHostname(event)
  }

  handleUser (event) {
    this.props.event.onChangeLoginUser(event)
  }

  handlePassword (event) {
    this.props.event.onChangeLoginPassword(event)
  }

  render () {
    const { hostname, user, password, message } = this.props.store.login

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input
              type='text'
              placeholder='mastodon.cloud'
              value={hostname}
              onChange={this.handleHostname.bind(this)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='test@gmail.com'
              value={user}
              onChange={this.handleUser.bind(this)}
            />
          </div>
          <div>
            <input
              type='password'
              value={password}
              onChange={this.handlePassword.bind(this)}
            />
          </div>
          <button type='submit'>ログイン</button>
          <div>{message}</div>
        </form>
        <Link to='/'>戻る</Link>
      </div>
    )
  }
}

export default inject('event', 'store')(observer(Login))
