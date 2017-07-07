import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import Loading from '../component/loading'
import * as ipc from '../../common/ipc'

import dispatch from '../dispatcher'
import * as action from '../../action'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      store: {},
      wait: false
    }
  }

  componentWillMount () {
    ipcRenderer.on(ipc.HOME, (event, value) => {
      console.log(ipc.HOME, value)

      const { store } = value

      this.setState({
        store: store,
        wait: false
      })
    })
  }

  componentDidMount () {
    this.setState({ wait: true })
    dispatch(action.HOME_INIT, {})
    ipcRenderer.send(ipc.HOME)
  }

  render () {
    if (this.state.wait) {
      return <Loading />
    } else {
      return (
        <div>
          <h1>Home</h1>
          <h2>No Accounts</h2>
          <p><Link to='/authorization'>Authorization</Link></p>
        </div>
      )
    }
  }
}
