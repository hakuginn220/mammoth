const { fetch, Headers, FormData } = window

const headers = (accessToken) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)
  return headers
}

const request = async (url, option) => {
  const response = await fetch(url, option)
  const json = await response.json()
  return json
}

export const postOauthToken = async (instance, apps) => {
  const body = new FormData()
  body.append('client_id', apps.client_id)
  body.append('client_secret', apps.client_secret)
  body.append('grant_type', 'password')
  body.append('username', instance.email)
  body.append('password', instance.password)
  body.append('scope', 'read write follow')

  const url = `https://${instance.hostname}/oauth/token`

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export const getAccountsId = async (instance, id) => {
  const url = `https://${instance.hostname}/api/v1/accounts/${id}`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export const getAccountsVerifyCredentials = async (instance) => {
  const url = `https://${instance.hostname}/api/v1/accounts/verify_credentials`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export const patchAccountsUpdateCredentials = async (instance) => {
  const url = `https://${instance.hostname}/api/v1/accounts/update_credentials`

  const json = await request(url, {
    mode: 'cors',
    method: 'PATCH',
    headers: headers(instance.access_token)
  })

  return json
}

export const postApps = async (instance) => {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  const url = `https://${instance.hostname}/api/v1/apps`

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export const getTimelinesHome = async (instance) => {
  const url = `https://${instance.hostname}/api/v1/timelines/home`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export const getTimelinesPublic = async (instance) => {
  const url = `https://${instance.hostname}/api/v1/timelines/public`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export const getTimelinesTag = async (instance, hashtag) => {
  const url = `https://${instance.hostname}/api/v1/timelines/tag/${hashtag}`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}
