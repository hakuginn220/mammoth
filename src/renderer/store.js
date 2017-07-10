import { extendObservable } from 'mobx'

export default class RenderStore {
  constructor (mainStore) {
    extendObservable(this, {
      users: mainStore.users,
      apps: mainStore.apps,
      home: [],
      public: []
    })
  }
}
