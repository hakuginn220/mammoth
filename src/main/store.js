import { action, observable } from 'mobx'

const MainStore = observable({
  users: [],

  addUser: action(user => {
    this.users.push(user)
  }),

  removeUser: action(userIndex => {
    this.users.splice(userIndex, 1)
  })
})

export default MainStore
