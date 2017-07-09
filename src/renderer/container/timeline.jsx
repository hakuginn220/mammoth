import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Status from '../component/status'
import * as mastodon from '../mastodon/timeline'

export default class Timeline extends Component {
  constructor (props) {
    super(props)

    this.state = {
      home: [],
      public: [],
      id: Number(this.props.match.params.id)
    }
  }

  componentDidUpdate () {
    console.log('timeline', this.state)
  }

  componentDidMount () {
    const user = this.props.users[this.state.id]
    if (user) {
      this._getHomeTimeline(user)
      this._getPublicTimeline(user)
    }
  }

  componentWillReceiveProps (nextProps) {
    const user = nextProps.users[this.state.id]
    if (user) {
      this._getHomeTimeline(user)
      this._getPublicTimeline(user)
    }
  }

  _getHomeTimeline (user) {
    mastodon.getHomeTimeline(user)
    .then(timeline => { this.setState({ home: timeline }) })
    .catch(error => { console.log(error) })
  }

  _getPublicTimeline (user) {
    mastodon.getPublicTimeline(user)
    .then(timeline => { this.setState({ public: timeline }) })
    .catch(error => { console.log(error) })
  }

  render () {
    return (
      <div>
        <h1>Timeline</h1>
        <h2>Home</h2>
        <ul>
          {this.state.home.map((status, id) => (
            <li key={id}><Status {...status} /></li>
          ))}
        </ul>
        <h2>Public</h2>
        <ul>
          {this.state.public.map((status, id) => (
            <li key={id}><Status {...status} /></li>
          ))}
        </ul>
        <p><Link to='/'>Back Home</Link></p>
      </div>
    )
  }
}
