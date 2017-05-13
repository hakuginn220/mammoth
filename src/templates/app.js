import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Main from '../organisms/main'
import Nav from '../organisms/nav'

injectGlobal`
  :root {
    --background-primary: #282c37;
    --text-primary: white;
  }

  ::selection {
    background: var(--text-primary);
    color: var(--background-primary);
  }

  body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    background: var(--background-primary);
    color: var(--text-primary);
  }

  input,
  select,
  textarea {
    font-family: 'Noto Sans', sans-serif;
  }
`

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Inner01 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 72px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Inner02 = styled.div`
  position: fixed;
  top: 0;
  left: 72px;
  display: block;
  width: calc(100% - 72px);
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default class App extends Component {
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
