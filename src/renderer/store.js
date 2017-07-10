import { observable, extendObservable } from 'mobx'

export default class RenderStore {
  constructor (main) {
    extendObservable(this, {
      users: observable.shallow(main.users),
      apps: observable.shallow(main.apps),
      home: observable.shallow([]),
      public: observable.shallow([])
    })
  }
}
