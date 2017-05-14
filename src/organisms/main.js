import React, { Component } from 'react'
import styled from 'styled-components'
import Home from '../molecules/home'
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
`

export default class Main extends Component {
  router () {
    switch (this.props.store.getIn(['history', 'pathname'])) {
      case '/timeline':
        return <Timeline {...this.props} />
      case '/oauth':
        return <Oauth {...this.props} />
      case '/':
        return <Home {...this.props} />
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
