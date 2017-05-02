import dispatcher from '../dispatcher'
import MainStore from './main'
import NavStore from './nav'
import OauthStore from './oauth'

const main = new MainStore(dispatcher)
const nav = new NavStore(dispatcher)
const oauth = new OauthStore(dispatcher)

export const store = [
  main,
  nav,
  oauth
]

export const calculate = () => ({
  main: main.getState(),
  nav: nav.getState(),
  oauth: oauth.getState()
})
