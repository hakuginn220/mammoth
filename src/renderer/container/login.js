import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

class Login extends Component {
  render () {
    const { hostname, user, password, message } = this.props.loginStore
    const { onSubmit, onChange } = this.props.loginEvent
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          onSubmit(e)
        }}>
          <div>
            <input
              type='text'
              name='hostname'
              placeholder='mastodon.cloud'
              value={hostname}
              onChange={e => onChange(e)}
            />
          </div>
          <div>
            <input
              type='text'
              name='user'
              placeholder='test@gmail.com'
              value={user}
              onChange={e => onChange(e)}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
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

export default inject('loginStore', 'loginEvent')(observer(Login))
