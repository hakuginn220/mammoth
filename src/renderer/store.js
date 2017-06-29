import LoginStore from './store/login'

export default class RendererStore {
  constructor () {
    this.login = new LoginStore()
  }
}
