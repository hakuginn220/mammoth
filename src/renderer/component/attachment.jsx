import React from 'react'

export default function Attachment (props) {
  return (
    <ul>
      <li>id: {props.id}</li>
      <li>type: {props.type}</li>
      <li>url: {props.url}</li>
      <li>remote_url: {props.remote_url}</li>
      <li>preview_url: {props.preview_url}</li>
      <li>text_url: {props.text_url}</li>
      <li>meta: {props.meta}</li>
    </ul>
  )
}
