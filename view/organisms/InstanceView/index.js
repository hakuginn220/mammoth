import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import style from './style.css'
import List from '../../molecules/List'

export default class InstanceView extends Component {
  _appChange (item) {
    ipcRenderer.send('AppChange', {
      type: 'browser',
      value: item
    })
  }

  render () {
    return (
      <div className={style.body}>
        <div className={style.inner}>
          <List list={this.props.list} onClick={this._appChange} />
        </div>
      </div>
    )
  }
}
