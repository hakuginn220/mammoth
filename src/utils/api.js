const { fetch, FormData } = window

async function api (url, option) {
  const response = await fetch(url, option)
  const json = await response.json()
  return json
}

export async function apps (domain) {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  const json = await api(`${domain}/api/v1/apps`, {
    mode: 'cors',
    method: 'post',
    body: body
  })

  return json
}

export async function oauthToken (domain, value, apps) {
  const body = new FormData()
  body.append('client_id', apps.client_id)
  body.append('client_secret', apps.client_secret)
  body.append('grant_type', 'password')
  body.append('username', value.email)
  body.append('password', value.password)
  body.append('scope', 'read write follow')

  const json = await api(`${domain}/oauth/token`, {
    mode: 'cors',
    method: 'post',
    body: body
  })

  return json
}
