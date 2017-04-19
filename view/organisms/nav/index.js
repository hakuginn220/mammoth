import React, { Component } from 'react'
import style from './style.css'

export default class Nav extends Component {
  render () {
    return (
      <ul className={style.ul}>
        <li className={style.li}>
          <a className={style.a}>01</a>
        </li>
        <li className={style.li}>
          <a className={style.a}>02</a>
        </li>
        <li className={style.li}>
          <a className={style.a}>+</a>
        </li>
      </ul>
    )
  }
}
