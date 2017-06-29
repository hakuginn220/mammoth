import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import DevTools from 'mobx-react-devtools'
import Login from './container/login'

injectGlobal`
  :root {
    --background-primary: #282c37;
    --text-primary: #ffffff;
  }
  ::selection {
    background: var(--text-primary);
    color: var(--background-primary);
  }
  body {
    margin: 0;
    font-family: sans-serif;
    background: var(--background-primary);
    color: var(--text-primary);
  }
  input,
  select,
  textarea {
    font-family: sans-serif;
  }
  a {
    color: var(--text-primary);
  }
`

const Home = () => (
  <div>
    <div><Link to='/login'>login</Link></div>
    <div><Link to='/error'>error</Link></div>
  </div>
)

const NoMatch = () => (
  <div>404 Error</div>
)

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route component={NoMatch} />
        </Switch>
        <DevTools />
      </div>
    )
  }
}

export default App
