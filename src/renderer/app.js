import React from 'react'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import { injectGlobal } from 'styled-components'

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
    const { event, store } = this.props
    return (
      <div>
        <div>{store.history.pathname}</div>
        <button onClick={() => event.onClick(`/${Math.random()}/`)}>テスト</button>
        <DevTools />
      </div>
    )
  }
}

export default inject('event')(observer(App))
