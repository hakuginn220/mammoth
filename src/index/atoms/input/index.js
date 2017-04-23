import React from 'react'
import style from './style.css'

export default ({ label = '', id = '', value = '', placeholder = '', onChange }) => (
  <div className={style.field}>
    <label className={style.label} htmlFor={id}>{label}</label>
    <input className={style.input} type='text' id={id} value={value} placeholder={placeholder} onChange={onChange} />
  </div>
)
