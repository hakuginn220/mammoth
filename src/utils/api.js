const { fetch, Headers, FormData } = window

const headers = (accessToken) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)
  return headers
}

const request = async (url, option) => {
  const response = await fetch(url, option)
  const obj = await response.json()
  return obj
}

export const oauthToken = async ({ hostname, email, password }, apps) => {
  const body = new FormData()
  body.append('client_id', apps.client_id)
  body.append('client_secret', apps.client_secret)
  body.append('grant_type', 'password')
  body.append('username', email)
  body.append('password', password)
  body.append('scope', 'read write follow')

  const url = `https://${hostname}/oauth/token`

  const response = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return response
}

export const accountsVerifyCredentials = async ({ hostname, accessToken }) => {
  const url = `https://${hostname}/api/v1/accounts/verify_credentials`

  const response = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(accessToken)
  })

  return response
}

export const apps = async ({ hostname }) => {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  const url = `https://${hostname}/api/v1/apps`

  const response = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return response
}

export const timelinesHome = async ({ hostname, accessToken }) => {
  const url = `https://${hostname}/api/v1/timelines/home`

  const response = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(accessToken)
  })

  return response
}
