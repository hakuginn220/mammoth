import React from 'react'

export default function Application (props) {
  return (
    <ul>
      <li>name: {props.name}</li>
      <li>website: {props.website}</li>
    </ul>
  )
}
