import React, { Component } from 'react'
import styled from 'styled-components'
import Init from '../molecules/init'
import Oauth from '../molecules/oauth'
import Timeline from '../molecules/timeline'

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
  switch () {
    switch (this.props.main.get('current')) {
      case 'timeline':
        return <Timeline {...this.props} />
      case 'oauth':
        return <Oauth {...this.props} />
      default:
        return <Init {...this.props} />
    }
  }

  render () {
    return (
      <Wrapper>
        <Inner>
          {this.switch()}
        </Inner>
      </Wrapper>
    )
  }
}
