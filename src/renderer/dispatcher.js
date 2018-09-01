import { ipcRenderer } from 'electron'

export default function dispatch(action, value) {
  ipcRenderer.send('dispatch', {
    type: action,
    payload: value
  })
}
