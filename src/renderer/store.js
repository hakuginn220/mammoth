import { action, extendObservable } from 'mobx'

export default class RendererStore {
  constructor () {
    extendObservable(this, {
      history: new window.URL('http://localhost'),

      push: action((value) => {
        console.log('t')
        this.history = new window.URL('http://localhost' + value)
      })
    })
  }
}
