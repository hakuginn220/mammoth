import { ipcRenderer } from 'electron'

import * as api from './utils/api'
import * as ipc from '../share/ipc'

export default function initEvent () {
  ipcRenderer.on(ipc.API_APPS, (event, value) => {
    const { hostname } = value
    api.apps({ hostname }).then(value => {
      console.log(value)
      ipcRenderer.send(ipc.API_APPS, value)
    }).catch(error => {
      throw error
    })
  })

  ipcRenderer.on(ipc.OAUTH_TOKEN, (event, value) => {
    const { hostname, user, password, apps } = value
    api.oauthToken({ hostname, user, password }, apps).then(value => {
      console.log(value)
      ipcRenderer.send(ipc.OAUTH_TOKEN, value)
    }).catch(error => {
      throw error
    })
  })

  ipcRenderer.on(ipc.API_APPS, (event, value) => {
    const { hostname, user, password } = value
    api.apps({ hostname }).then(apps => {
      api.oauthToken({ hostname, user, password }, apps).then(oauthToken => {
        api.accountsVerifyCredentials({ hostname }, oauthToken).then(account => {
          const user = { hostname, apps, oauthToken, account }
          console.log(user)
          ipcRenderer.send(ipc.API_APPS, user)
        }).catch(error => {
          throw error
        })
      }).catch(error => {
        throw error
      })
    }).catch(error => {
      throw error
    })
  })
}
