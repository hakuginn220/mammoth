import React from 'react'

export default (props) => (
  <div>
    <div>id: {props.id}</div>
    <div>username: {props.username}</div>
    <div>display_name: {props.display_name}</div>
    <div>locked: {props.locked}</div>
    <div>created_at: {props.created_at}</div>
    <div>followers_count: {props.followers_count}</div>
    <div>following_count: {props.following_count}</div>
    <div>statuses_count: {props.statuses_count}</div>
    <div>note: {props.note}</div>
    <div>url: {props.url}</div>
    <div>avatar: {props.avatar}</div>
    <div>avatar_static: {props.avatar_static}</div>
    <div>header: {props.header}</div>
    <div>header_static: {props.header_static}</div>
  </div>
)
