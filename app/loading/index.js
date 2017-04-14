import React from 'react'
import style from './style.css'

export default (props) => {
  let css = style.bodyShow
  if (props.hide) {
    css = style.bodyHide
  }

  return (
    <div className={css}>
      <div className={style.title}>{props.text}</div>
      <div className={style.icon}>
        <div className={style.icon01} />
        <div className={style.icon02} />
        <div className={style.icon03} />
        <div className={style.icon04} />
        <div className={style.icon05} />
      </div>
    </div>
  )
}
