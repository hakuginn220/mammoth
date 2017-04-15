import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { ipcRenderer } from 'electron'
import style from './style.css'

export default class Webview extends Component {
  componentDidMount () {
    const dom = findDOMNode(this)

    if (dom === null) {
      return
    }

    dom.addEventListener('dom-ready', () => {
      ipcRenderer.send('WebviewLoading', true)
    })
  }

  render () {
    return <webview className={style.body} src={this.props.view.url} />
  }
}
