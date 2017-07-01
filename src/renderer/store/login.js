import { action, observable } from 'mobx'

const loginStore = observable({
  hostname: '',
  user: '',
  password: '',
  message: '',

  onChange: action(function (value, name) {
    this[name] = value
  }),

  onError: action(message => {
    this.message = message
  })
})

export default loginStore
