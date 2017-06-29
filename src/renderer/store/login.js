import { action, extendObservable } from 'mobx'

export default class LoginStore {
  constructor () {
    extendObservable(this, {
      instance: '',
      user: '',
      password: '',
      onChangeInstance: action(value => {
        this.instance = value
      }),
      onChangeUser: action(value => {
        this.user = value
      }),
      onChangePassword: action(value => {
        this.password = value
      })
    })
  }
}
