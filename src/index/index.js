import React from 'react'
import { render } from 'react-dom'
import { Container } from 'flux/utils'
import View from './view'

const ViewContainer = Container.create(View)

render(
  <ViewContainer />,
  document.getElementById('root')
)
