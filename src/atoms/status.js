import React from 'react'
import styled from 'styled-components'

const Status = styled.div`
  position: relative;
  display: block;
  padding: 10px 10px 10px 72px;
`

const Avatar = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  width: 52px;
  height: 52px;
  border-radius: 4px;
  vertical-align: middle;
`

const Name = styled.div`
  display: block;
  margin: 0 0 0.5em;
`

const DisplayName = styled.div`
  display: inline;
  margin: 0 0.5em 0 0;
  font-size: 14px;
  line-height: 1;
`

const Acct = styled.div`
  display: inline;
  font-size: 14px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.5);
`

const Content = styled.div`
  display: block;
  margin: 0 0 0.5em;
  font-size: 14px;
`

const CreatedAt = styled.div`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`

export default ({ status }) => {
  let avatar = status.getIn(['account', 'avatar'])
  if (/missing.png/.test(avatar)) {
    const pathname = status.get('uri').split(',')[0].replace(/tag:/, '')
    avatar = `https://${pathname + status.getIn(['account', 'avatar'])}`
  }
  return (
    <Status>
      <Avatar src={avatar} />
      <Name>
        <DisplayName>{status.getIn(['account', 'display_name'])}</DisplayName>
        <Acct>@{status.getIn(['account', 'acct'])}</Acct>
      </Name>
      <Content>{status.get('content').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}</Content>
      <CreatedAt>{status.get('created_at')}</CreatedAt>
    </Status>
  )
}
