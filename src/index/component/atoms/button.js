import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.6em 1.2em;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-sizing: border-box;
  outline: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

export default ({ type = 'button', value = '', onClick }) => {
  if (onClick) {
    return <Button type={type} onClick={() => onClick()}>{value}</Button>
  }
  return <Button type={type}>{value}</Button>
}
