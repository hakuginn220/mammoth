import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import style from './style.css'
import Button from '../../atoms/button'
import Input from '../../atoms/input'

export default class Oauth extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  _updateValue (event) {
    this.setState({ value: event.target.value })
  }

  _submitValue (event) {
    ipcRenderer.send('OATH_SUBMIT', this.state)
    event.preventDefault()
  }

  render () {
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
            <Button
              type='submit'
              value='次へ'
            />
          </div>
        </fieldset>
      </form>
    )
  }
}
