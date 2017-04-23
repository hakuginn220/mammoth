import React from 'react'
import style from './style.css'

export default ({ type = 'button', value = '', onClick }) => {
  if (onClick) {
    return <button className={style.button} type={type} onClick={() => onClick()}>{value}</button>
  }
  return <button className={style.button} type={type}>{value}</button>
}
