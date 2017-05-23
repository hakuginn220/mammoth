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
  width: 52px;
  height: 52px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  line-height: 52px;
  cursor: pointer;
  background: var(--background-primary);
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`

const Avatar = styled.img`
  display: block;
  width: 52px;
  height: 52px;
  border-radius: 8px;
`

export default class Nav extends Component {
  transition (event) {
    event.preventDefault()
    const { pathname, hash, search } = event.currentTarget
    actions.push(pathname.replace(/\/C:/, '') + hash + search)
  }

  accounts (array) {
    if (!array) return null
    return array.map((item, index) => {
      const href = `/timeline?hostname=${item.get('hostname')}`
      let avatar = item.get('avatar')
      if (/missing.png/.test(avatar)) {
        avatar = `https://${item.get('hostname') + item.get('avatar')}`
      }
      return (
        <Item key={index}>
          <Button href={href} onClick={this.transition}>
            <Avatar src={avatar} alt={item.get('id')} />
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
        {this.accounts(this.props.store.get('accounts').toArray())}
        <Item key='oauth'>
          <Button href='/oauth' onClick={this.transition}>+</Button>
        </Item>
      </List>
    )
  }
}
