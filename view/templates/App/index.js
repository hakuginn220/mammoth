import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import InstanceView from '../../organisms/InstanceView'
import BrowserView from '../../organisms/BrowserView'
import './style.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [
        {
          name: 'mastodon.cloud',
          url: 'https://mastodon.cloud'
        },
        {
          name: 'mstdn.jp',
          url: 'https://mstdn.jp'
        },
        {
          name: 'pawoo.net',
          url: 'https://pawoo.net'
        },
        {
          name: 'kirakiratter.com',
          url: 'https://kirakiratter.com'
        }
      ],
      type: 'instance',
      loading: false,
      view: {
        name: '',
        url: ''
      }
    }
  }

  componentDidMount () {
    ipcRenderer.on('AppChange', (event, param) => {
      this.setState({
        type: param.type,
        view: param.value
      })
    })

    ipcRenderer.on('WebviewLoading', (event, param) => {
      this.setState({
        loading: param
      })
    })
  }

  render () {
    let view

    if (this.state.type === 'instance') {
      view = <InstanceView {...this.state} />
    }

    if (this.state.type === 'browser') {
      view = <BrowserView {...this.state} />
    }

    return view
  }
}
