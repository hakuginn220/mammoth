import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

class Container extends React.Component {
  render () {
    return <App />
  }
}

render(
  <Container />,
  document.getElementById('root')
)
