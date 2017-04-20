import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import style from './style.css'
import Button from '../../atoms/button'
import Input from '../../atoms/input'

export default class Oauth extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '', result: {}, error: '', action: 0 }

    ipcRenderer.on('OATH_SUBMIT_FAIL', (event) => {
      this.setState({ error: '接続に失敗しました', action: 0 })
    })

    ipcRenderer.on('OATH_SUBMIT_SUCCESS', (event, result) => {
      this.setState({ result: result })
    })
  }

  _updateValue (event) {
    this.setState({ value: event.target.value, error: '' })
  }

  _submitValue (event) {
    ipcRenderer.send('OATH_SUBMIT', this.state)
    this.setState({ action: this.state.action + 1 })
    event.preventDefault()
  }

  _render0 () {
    return (
      <form className={style.form} onSubmit={this._submitValue.bind(this)}>
        <fieldset className={style.fieldset}>
          <legend className={style.legend}>インスタンスの追加</legend>
          <div className={style.field}>
            <Input
              label='ドメインを入力'
              id='instance_domain_name'
              value={this.state.value}
              placeholder='mastodon.cloud'
              onChange={this._updateValue.bind(this)}
            />
          </div>
          <div className={style.field}>
            {this.state.error}
          </div>
          <div className={style.field}>
            <Button
              type='submit'
              value='次へ'
            />
          </div>
        </fieldset>
      </form>
    )
  }

  _render1 () {
    return (
      <div>
        <div>インスタンス確認中: {this.state.value}</div>
        <div>サイト名: {this.state.result.title}</div>
        <div>ドメイン名: {this.state.result.url}</div>
        <div>メールアドレス: {this.state.result.email}</div>
      </div>
    )
  }

  _render2 () {
    return (
      <div>
        <div>インスタンス認証中...</div>
      </div>
    )
  }

  render () {
    switch (this.state.action) {
      case 2:
        return this._render2()
      case 1:
        return this._render1()
      default:
        return this._render0()
    }
  }
}
