import React, { Component } from 'react'
import styled from 'styled-components'
import Status from '../atoms/status'
import * as actions from '../actions'

const StatusList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const StatusItem = styled.li`
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  &:first-child {
    border-top: 0;
  }
`

export default class Timeline extends Component {
  componentWillMount () {
    actions.timeline(this.props.store)
  }

  status (array) {
    return array.reverse().map((status, index) => {
      return (
        <StatusItem key={status.get('id')}>
          <Status status={status} />
        </StatusItem>
      )
    })
  }

  render () {
    return (
      <StatusList>
        {this.status(this.props.store.get('timelines').toArray())}
      </StatusList>
    )
  }
}
