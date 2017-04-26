import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../atoms/button'
import Input from '../atoms/input'
import * as Action from '../../action/oauth'

const Form = styled.form`
  display: block;
  margin: 0;
`

const Fieldset = styled.fieldset`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`

const Legend = styled.legend`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0 0 0.5em;
  border-bottom: 1px solid white;
  font-size: 20px;
  text-align: center;
`

const Field = styled.div`
  display: block;
  margin: 40px 0 0;
`

export default class Oauth extends Component {
  _updateValue (event) {
    event.preventDefault()
    Action.oauthUpdateValue(event.target.value)
  }

  _submitValue (event) {
    event.preventDefault()
    Action.oauthUpdateResult(this.props.oauth.get('value'))
  }

  _render0 () {
    return (
      <Form onSubmit={this._submitValue.bind(this)}>
        <Fieldset>
          <Legend>インスタンスの追加</Legend>
          <Field>
            <Input
              label='ドメインを入力'
              id='instance_domain_name'
              value={this.props.oauth.get('value')}
              placeholder='mastodon.cloud'
              onChange={this._updateValue.bind(this)}
            />
          </Field>
          <Field>
            {this.props.oauth.get('error')}
          </Field>
          <Field>
            <Button
              type='submit'
              value='次へ'
            />
          </Field>
        </Fieldset>
      </Form>
    )
  }

  _render1 () {
    return (
      <div>
        <div>インスタンス確認中</div>
        <div>{this.props.oauth.get('value')}</div>
        <div>リザルト情報</div>
        <div>{this.props.oauth.getIn(['result', 'title'])}</div>
        <div>{this.props.oauth.getIn(['result', 'url'])}</div>
        <div>{this.props.oauth.getIn(['result', 'email'])}</div>
      </div>
    )
  }

  render () {
    switch (this.props.oauth.get('action')) {
      case 1:
        return this._render1()
      default:
        return this._render0()
    }
  }
}
