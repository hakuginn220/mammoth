import React from 'react'

export default function Status(props) {
  return (
    <ul>
      <li>id: {props.id}</li>
      <li>uri: {props.uri}</li>
      <li>url: {props.url}</li>
      <li>account: {props.account} /></li>
      <li>in_reply_to_id: {props.in_reply_to_id}</li>
      <li>in_reply_to_account_id: {props.in_reply_to_account_id}</li>
      <li>reblog: {props.reblog} /></li>
      <li>content: {props.content}</li>
      <li>created_at: {props.created_at}</li>
      <li>reblogs_count: {props.reblogs_count}</li>
      <li>favourites_count: {props.favourites_count}</li>
      <li>reblogged: {props.reblogged}</li>
      <li>favourited: {props.favourited}</li>
      <li>sensitive: {props.sensitive}</li>
      <li>spoiler_text: {props.spoiler_text}</li>
      <li>visibility: {props.visibility}</li>
      <li>media_attachments: {props.media_attachments}</li>
      <li>mentions: {props.mentions}</li>
      <li>tags: {props.tags}</li>
      <li>application: {props.application}</li>
      <li>language: {props.language}</li>
    </ul>
  )
}
