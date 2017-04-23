import React, { Component } from 'react'
import style from './style.css'
import Oauth from '../../molecules/oauth'

export default class Main extends Component {
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.inner}>
          <Oauth />
        </div>
      </div>
    )
  }
}
