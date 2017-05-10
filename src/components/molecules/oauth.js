import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../atoms/button'
import Input from '../atoms/input'
import * as actions from '../../actions/oauth'

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
  font-size: 20px;
`

const Field = styled.div`
  display: block;
  margin: 40px 0 0;
`

export default class Oauth extends Component {
  submitOauthToken (event) {
    event.preventDefault()
    actions.submitOauthToken({
      hostname: event.currentTarget.hostname.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value
    })
  }

  render () {
    return (
      <Form onSubmit={this.submitOauthToken}>
        <Fieldset>
          <Legend>インスタンスの追加</Legend>
          <Field>
            <Input type='text' label='インスタンス先' id='hostname' name='hostname' placeholder='mastodon.cloud' />
          </Field>
          <Field>
            <Input type='email' label='メールアドレス' id='email' name='email' placeholder='test@sample.com' />
          </Field>
          <Field>
            <Input type='password' label='パスワード' id='password' name='password' placeholder='password' />
          </Field>
          <Field>
            <div>{this.props.store.getIn('oauth', 'message')}</div>
          </Field>
          <Field>
            <Button type='submit' value='次へ' />
          </Field>
        </Fieldset>
      </Form>
    )
  }
}
