import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Main from './organisms/main'
import Nav from './organisms/nav'

injectGlobal`
  :root {
    --background-primary: #282c37;
    --button-primary: #282c37;
    --text-primary: white;
  }

  ::selection {
    background: var(--text-primary);
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background: var(--background-primary);
    color: var(--text-primary);
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Inner01 = styled.div`
  display: block;
  width: 72px;
  background: rgba(0, 0, 0, 0.5);
`

const Inner02 = styled.div`
  display: block;
  width: calc(100% - 72px);
`

export default class Views extends Component {
  render () {
    return (
      <Wrapper>
        <Inner01>
          <Nav {...this.props} />
        </Inner01>
        <Inner02>
          <Main {...this.props} />
        </Inner02>
      </Wrapper>
    )
  }
}
