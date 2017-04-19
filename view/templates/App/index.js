import React, { Component } from 'react'
import style from './style.css'
import Main from '../../organisms/main'
import Nav from '../../organisms/nav'

export default class App extends Component {
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.nav}>
          <Nav />
        </div>
        <div className={style.main}>
          <Main />
        </div>
      </div>
    )
  }
}
