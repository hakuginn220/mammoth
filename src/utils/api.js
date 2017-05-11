const { fetch, Headers, FormData } = window

function headers (accessToken) {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)
  return headers
}

async function request (url, option) {
  const response = await fetch(url, option)
  const json = await response.json()
  return json
}

export async function postOauthToken (domain, value, apps) {
  const body = new FormData()
  body.append('client_id', apps.client_id)
  body.append('client_secret', apps.client_secret)
  body.append('grant_type', 'password')
  body.append('username', value.email)
  body.append('password', value.password)
  body.append('scope', 'read write follow')

  const url = `${domain}/oauth/token`

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export async function getAccountsId (instance, id) {
  const url = `${instance.domain}/api/v1/accounts/${id}`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export async function getAccountsVerifyCredentials (instance) {
  const url = `${instance.domain}/api/v1/accounts/verify_credentials`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export async function patchAccountsUpdateCredentials (instance) {
  const url = `${instance.domain}/api/v1/accounts/update_credentials`

  const json = await request(url, {
    mode: 'cors',
    method: 'PATCH',
    headers: headers(instance.access_token)
  })

  return json
}

export async function postApps (domain) {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  const url = `${domain}/api/v1/apps`

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export async function getTimelinesHome (instance) {
  const url = `${instance.domain}/api/v1/timelines/home`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export async function getTimelinesPublic (instance) {
  const url = `${instance.domain}/api/v1/timelines/public`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}

export async function getTimelinesTag (instance, hashtag) {
  const url = `${instance.domain}/api/v1/timelines/tag/${hashtag}`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(instance.access_token)
  })

  return json
}
