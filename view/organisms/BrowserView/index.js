import React, { Component } from 'react'
import style from './style.css'
import { ipcRenderer } from 'electron'
import Loading from '../../molecules/Loading'
import Navigation from '../../molecules/Navigation'
import Webview from '../../molecules/Webview'

export default class BrowserView extends Component {
  componentDidMount () {
    this._webviewLoading()
  }

  _webviewLoading () {
    ipcRenderer.send('WebviewLoading', false)
  }

  _appChange (type, item) {
    ipcRenderer.send('WebviewLoading', false)
    ipcRenderer.send('AppChange', {
      type: type,
      value: item
    })
  }

  render () {
    let loading = style.loadingShow
    let webview = style.webviewHide
    if (this.props.loading) {
      loading = style.loadingHide
      webview = style.webviewShow
    }

    return (
      <div>
        <Navigation list={this.props.list} onClick={this._appChange} />
        <div className={loading}>
          <Loading {...this.props} />
        </div>
        <div className={webview}>
          <Webview {...this.props} />
        </div>
      </div>
    )
  }
}
