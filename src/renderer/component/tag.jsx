import React from 'react'

export default function Tag (props) {
  return (
    <ul>
      <li>name: {props.name}</li>
      <li>url: {props.url}</li>
    </ul>
  )
}
