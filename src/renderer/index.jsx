import React from 'react'
import { render } from 'react-dom'
import { ipcRenderer, remote } from 'electron'

import Store from './store'
import App from './app'

const { app } = remote

document.title = app.getName()

let store

ipcRenderer.on('ready', (e, value) => {
  const { users, apps } = value.payload

  store = new Store({
    users: users,
    apps: apps
  })

  render(
    <App store={store} />,
    document.getElementById('root')
  )
})

ipcRenderer.on('dispatch', (e, value) => {
  const { users, apps } = value.payload
  store.users = users
  store.apps = apps
})

ipcRenderer.send('ready')
