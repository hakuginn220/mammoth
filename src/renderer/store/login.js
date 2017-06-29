import { action, extendObservable } from 'mobx'

export default class LoginStore {
  constructor () {
    extendObservable(this, {
      hostname: '',
      user: '',
      password: '',
      message: '',
      onChangeHostname: action(value => {
        this.hostname = value
      }),
      onChangeUser: action(value => {
        this.user = value
      }),
      onChangePassword: action(value => {
        this.password = value
      }),
      onErrorMessage: action(message => {
        this.message = message
      })
    })
  }
}
