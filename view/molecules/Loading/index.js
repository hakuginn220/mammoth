import React from 'react'
import style from './style.css'

export default ({ view }) => {
  return (
    <div className={style.body}>
      <div className={style.inner}>
        <div className={style.title}>{view.name}</div>
        <div className={style.icon}>
          <div className={style.icon01} />
          <div className={style.icon02} />
          <div className={style.icon03} />
          <div className={style.icon04} />
          <div className={style.icon05} />
        </div>
      </div>
    </div>
  )
}
