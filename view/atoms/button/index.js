import React from 'react'
import style from './style.css'

export default ({ value = '', onClick }) => (
  <button className={style.button} onClick={() => onClick()}>{value}</button>
)
