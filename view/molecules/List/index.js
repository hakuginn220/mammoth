import React from 'react'
import style from './style.css'

export default ({ list, onClick }) => {
  const items = []

  list.forEach(item => {
    items.push(
      <li className={style.item} key={item.name}>
        <button className={style.button} onClick={() => onClick(item)}>
          {item.name}
        </button>
      </li>
    )
  })

  return (
    <ul className={style.list}>
      {items}
    </ul>
  )
}
