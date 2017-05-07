import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()

history.listen((location, action) => {
  console.log(action, location.pathname, location.state)
})

export default history
