import React, { Component } from 'react'
import styled from 'styled-components'
import * as actions from '../../actions/history'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  list-style: none;
`

const Item = styled.li`
  display: block;
  margin: 10px 0 0;
  &:first-child {
    margin: 0;
  }
`

const Button = styled.a`
  display: block;
  padding: 16px 0;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background: var(--background-primary);
  border: 2px solid var(--background-primary);
  box-sizing: border-box;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:active,
  &:hover,
  &:focus {
    border: 2px solid white;
  }
`

export default class Nav extends Component {
  transition (event) {
    event.preventDefault()
    actions.updateHistoryPathname(event.currentTarget.pathname)
  }

  render () {
    return (
      <List>
        <Item key='home'>
          <Button href='/' onClick={this.transition}>home</Button>
        </Item>
        <Item key='oauth'>
          <Button href='/oauth' onClick={this.transition}>+</Button>
        </Item>
      </List>
    )
  }
}
