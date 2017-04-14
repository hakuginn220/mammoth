import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import style from './style.css'

export default class Webview extends Component {
  componentDidMount () {
    const dom = findDOMNode(this)
    const event = document.createEvent('HTMLEvents')

    event.initEvent('mammoth-webview-init', true, true)

    dom.addEventListener('dom-ready', () => {
      window.dispatchEvent(event)
    })
  }

  render () {
    let css = style.webviewShow
    if (this.props.hide) {
      css = style.webviewHide
    }

    return <webview className={css} src={this.props.src} />
  }
}
