import React from 'react'
import style from './style.css'

export default ({ list, onClick }) => {
  const items = []

  items.push(
    <li className={style.item} key='back'>
      <button className={style.button} onClick={() => onClick('instance', { name: '', url: '' })}>
        Back
      </button>
    </li>
  )

  list.forEach(item => {
    items.push(
      <li className={style.item} key={item.name}>
        <button className={style.button} onClick={() => onClick('browser', item)}>
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
