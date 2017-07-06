import React from 'react'
import styled, { keyframes } from 'styled-components'

const Anime = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  position: relative;
  display: inline-block;
  width: 5em;
  height: 5em;
  border-top: 0.5em solid #dddddd;
  border-right: 0.5em solid #dddddd;
  border-bottom: 0.5em solid #dddddd;
  border-left: 0.5em solid #999999;
  border-radius: 50%;
  font-size: 10px;
  text-indent: -9999em;
  transform: translateZ(0);
  animation: ${Anime} 1.1s infinite linear;
`

export default () => (
  <Loading>Loading...</Loading>
)
