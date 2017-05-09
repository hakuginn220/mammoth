import dispatcher from '../dispatcher'
import HistoryStore from './history'
import InstanceStore from './instance'
import OauthStore from './oauth'

const history = new HistoryStore(dispatcher)
const instance = new InstanceStore(dispatcher)
const oauth = new OauthStore(dispatcher)

export const store = [
  history,
  instance,
  oauth
]

export const calculate = () => ({
  history: history.getState(),
  instance: instance.getState(),
  oauth: oauth.getState()
})
