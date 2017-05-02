import { Dispatcher } from 'flux'

const dispatcher = new Dispatcher()

export default dispatcher

export const dispatch = (type, value) => {
  dispatcher.dispatch({
    type: type,
    value: value
  })
}
