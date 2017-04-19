import React from 'react'
import style from './style.css'
import Button from '../../atoms/button'

export default () => {
  return (
    <div className={style.form}>
      <div className={style.field}>
        <label htmlFor='oauth_domain'>インスタンス先のドメインを入力してください</label>
      </div>
      <div className={style.field}>
        <input type='text' id='oauth_domain' />
      </div>
      <div className={style.field}>
        <Button value='認証する' />
      </div>
    </div>
  )
}
