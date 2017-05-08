import dispatcher from '../dispatcher'
import HistoryStore from './history'
import OauthStore from './oauth'

const history = new HistoryStore(dispatcher)
const oauth = new OauthStore(dispatcher)

export const store = [
  history,
  oauth
]

export const calculate = () => ({
  history: history.getState(),
  oauth: oauth.getState()
})
