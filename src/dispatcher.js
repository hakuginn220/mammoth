import { Dispatcher } from 'flux'

const dispatcher = new Dispatcher()

export default dispatcher

export function dispatch (type, value) {
  dispatcher.dispatch({
    type: type,
    value: value
  })
}
