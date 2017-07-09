import React from 'react'

export default function Account (props) {
  return (
    <ul>
      <li>id: {props.id}</li>
      <li>username: {props.username}</li>
      <li>display_name: {props.display_name}</li>
      <li>locked: {String(props.locked)}</li>
      <li>created_at: {props.created_at}</li>
      <li>followers_count: {props.followers_count}</li>
      <li>following_count: {props.following_count}</li>
      <li>statuses_count: {props.statuses_count}</li>
      <li>note: {props.note}</li>
      <li>url: {props.url}</li>
      <li>avatar: {props.avatar}</li>
      <li>avatar_static: {props.avatar_static}</li>
      <li>header: {props.header}</li>
      <li>header_static: {props.header_static}</li>
    </ul>
  )
}
