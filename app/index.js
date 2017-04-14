import React, { Component } from 'react'
import { render } from 'react-dom'
import style from './style.css'

import Loading from './loading'
import Webview from './webview'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: {
        text: 'mastodon.cloud',
        hide: false
      },
      webview: {
        src: 'https://mastodon.cloud/',
        webview_hide: true
      }
    }
  }

  componentDidMount () {
    window.addEventListener('mammoth-webview-init', () => {
      this.setState({
        loading: {
          hide: true
        },
        webview: {
          hide: false
        }
      })
    })
  }

  render () {
    return (
      <div className={style.body}>
        <Loading text={this.state.loading.text} hide={this.state.loading.hide} />
        <Webview src={this.state.webview.src} hide={this.state.webview.hide} />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
