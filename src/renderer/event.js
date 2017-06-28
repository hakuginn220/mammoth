export default class RendererEvent {
  constructor (store) {
    this.store = store
  }

  onClick (href) {
    this.store.push(href)
  }
}
