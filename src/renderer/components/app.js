import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  :root {
    --background-primary: #282c37;
    --text-primary: white;
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

export default class App extends React.Component {
  render () {
    return <div>Hello World</div>
  }
}
