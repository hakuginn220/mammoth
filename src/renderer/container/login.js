import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Login extends Component {
  render () {
    const Event = this.props.event
    const Store = this.props.store.login
    return (
      <div>
        <form onSubmit={() => Event.onSubmitLogin()}>
          <div>
            <input
              type='text'
              placeholder='mastodon.cloud'
              value={Store.hostname}
              onChange={e => Event.onChangeLoginHostname(e)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='test@gmail.com'
              value={Store.user}
              onChange={e => Event.onChangeLoginUser(e)}
            />
          </div>
          <div>
            <input
              type='password'
              value={Store.password}
              onChange={e => Event.onChangeLoginPassword(e)}
            />
          </div>
          <button type='submit'>ログイン</button>
          <div>{Store.message}</div>
        </form>
        <Link to='/'>戻る</Link>
      </div>
    )
  }
}

export default inject('event', 'store')(observer(Login))
