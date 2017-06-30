import { action, extendObservable } from 'mobx'

export default class MainStore {
  constructor () {
    extendObservable(this, {
      users: [],

      addUser: action(user => {
        this.users.push(user)
      }),

      removeUser: action(userIndex => {
        this.users.splice(userIndex, 1)
      })
    })
  }
}
