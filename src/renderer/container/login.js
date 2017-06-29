import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

class Login extends React.Component {
  render () {
    const { event, store } = this.props
    return (
      <div>
        <Link to='/'>Home</Link>
        <div>{store.history.pathname}</div>
        <button onClick={() => event.onClick(`/${Math.random()}/`)}>テスト</button>
      </div>
    )
  }
}

export default inject('event', 'store')(observer(Login))
