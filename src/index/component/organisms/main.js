import React, { Component } from 'react'
import styled from 'styled-components'
import Oauth from '../molecules/oauth'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Inner = styled.div`
  display: block;
  width: 100%;
  max-width: 640px;
  padding: 10px;
  box-sizing: border-box;
`

export default class Main extends Component {
  render () {
    return (
      <Wrapper>
        <Inner>
          <Oauth {...this.props} />
        </Inner>
      </Wrapper>
    )
  }
}
