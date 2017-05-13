import React, { Component } from 'react'
import styled from 'styled-components'
import * as actions from '../actions'

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
    const { pathname, hash, search } = event.currentTarget
    actions.push(pathname.replace(/\/C:/, '') + hash + search)
  }

  eachItem (list) {
    return list.map((item) => {
      const href = `/timeline?hostname=${item.get('hostname')}&timeline=home`
      return (
        <Item key={item.get('hostname')}>
          <Button href={href} onClick={this.transition}>
            {item.get('id')}
          </Button>
        </Item>
      )
    })
  }

  render () {
    return (
      <List>
        <Item key='home'>
          <Button href='/' onClick={this.transition}>home</Button>
        </Item>
        {this.eachItem(this.props.store.get('instance').toArray())}
        <Item key='oauth'>
          <Button href='/oauth' onClick={this.transition}>+</Button>
        </Item>
      </List>
    )
  }
}
