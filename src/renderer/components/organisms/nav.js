import React, { Component } from 'react'
import styled from 'styled-components'

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
  color: var(--text-primary);
`

export default class Nav extends Component {
  render () {
    return (
      <List>
        <Item>
          <Button>+</Button>
        </Item>
        <Item>
          <Button>01</Button>
        </Item>
        <Item>
          <Button>02</Button>
        </Item>
      </List>
    )
  }
}
