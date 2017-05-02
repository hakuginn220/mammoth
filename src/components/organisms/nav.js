import React, { Component } from 'react'
import styled from 'styled-components'
import * as actions from '../../actions/nav'

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
  transition: all 0.2s ease-in-out;
  &:active,
  &:hover,
  &:focus {
    border: 2px solid white;
  }
`

export default class Nav extends Component {
  selectInstance (event) {
    event.preventDefault()
    actions.selectInstance()
  }

  oauthInstance (event) {
    event.preventDefault()
    actions.oauthInstance()
  }

  render () {
    return (
      <List>
        {this.props.nav.map((value) =>
          <Item key={value.get('id')}>
            <Button onClick={this.selectInstance.bind(this)}>{value.get('name')}</Button>
          </Item>
        )}
        <Item>
          <Button onClick={this.oauthInstance.bind(this)}>+</Button>
        </Item>
      </List>
    )
  }
}
