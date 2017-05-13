import React, { Component } from 'react'
import * as actions from '../actions'

export default class Timeline extends Component {
  componentWillMount () {
    actions.timeline(this.props.store)
  }

  status (array) {
    return array.reverse().map((value, index) => {
      const avatar = value.getIn(['account', 'avatar'])
      const name = value.getIn(['account', 'display_name'])
      const id = value.getIn(['account', 'acct'])
      const content = value.get('content').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      const created = value.get('created_at')

      return (
        <li key={index}>
          <img src={avatar} />
          <div>{name} @{id}</div>
          <div>{content}</div>
          <div>{created}</div>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <ul>
          {this.status(this.props.store.get('timelines').toArray())}
        </ul>
      </div>
    )
  }
}
