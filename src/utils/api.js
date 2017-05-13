const { fetch, Headers, FormData } = window

const headers = (access_token) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${access_token}`)
  return headers
}

const request = async (url, option) => {
  const response = await fetch(url, option)
  const json = await response.json()
  return json
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

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export const accountsVerifyCredentials = async ({ hostname, access_token }) => {
  const url = `https://${hostname}/api/v1/accounts/verify_credentials`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(access_token)
  })

  return json
}

export const apps = async ({ hostname }) => {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  const url = `https://${hostname}/api/v1/apps`

  const json = await request(url, {
    mode: 'cors',
    method: 'POST',
    body: body
  })

  return json
}

export const timelinesHome = async ({ hostname, access_token }) => {
  const url = `https://${hostname}/api/v1/timelines/home`

  const json = await request(url, {
    mode: 'cors',
    method: 'GET',
    headers: headers(access_token)
  })

  return json
}
