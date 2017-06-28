import { action, extendObservable } from 'mobx'

export const initialState = {
  history: new window.URL('http://localhost')
}

export default class RendererStore {
  constructor (initialState) {
    const state = Object.assign({}, initialState, {
      push: action((href) => {
        this.history = new window.URL('http://localhost' + href)
      })
    })
    extendObservable(this, state)
  }
}
