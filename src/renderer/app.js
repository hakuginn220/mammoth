import React from 'react'
import { inject, observer } from 'mobx-react'
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
`

class App extends React.Component {
  render () {
    return (
      <div>
        <Login store={this.props.store} />
        <DevTools />
      </div>
    )
  }
}

export default inject('event')(observer(App))
