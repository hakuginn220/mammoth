import React from 'react'

export default function Mention(props) {
  return (
    <ul>
      <li>url: {props.url}</li>
      <li>username: {props.username}</li>
      <li>acct: {props.acct}</li>
      <li>id: {props.id}</li>
    </ul>
  )
}
