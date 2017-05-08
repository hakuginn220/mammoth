import React, { Component } from 'react'
import styled from 'styled-components'
import Init from '../molecules/init'
import Oauth from '../molecules/oauth'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Inner = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

export default class Main extends Component {
  router () {
    switch (this.props.history.get('pathname')) {
      case '/oauth':
        return <Oauth {...this.props} />
      case '/':
        return <Init {...this.props} />
      default:
        return null
    }
  }

  render () {
    return (
      <Wrapper>
        <Inner>
          {this.router()}
        </Inner>
      </Wrapper>
    )
  }
}
