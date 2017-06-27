export default class RendererEvent {
  constructor (store) {
    this.store = store
  }

  onClick (value) {
    this.store.push(value)
  }
}
