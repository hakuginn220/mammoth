import React, { Component } from 'react'
import * as actions from '../actions'

export default class Timeline extends Component {
  componentWillMount () {
    actions.timeline(this.props.store)
  }

  status (array) {
    return array.map((value, index) => {
      return (
        <li key={index}>
          <div>{value.getIn(['account', 'display_name'])} @{value.getIn(['account', 'username'])}</div>
          <div>{value.get('content').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}</div>
          <div>{value.get('created_at')}</div>
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
