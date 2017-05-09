const { fetch, FormData } = window

export function apps (domain, callback) {
  const body = new FormData()
  body.append('client_name', 'mammoth')
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  fetch(`${domain}/api/v1/apps`, {
    mode: 'cors',
    method: 'post',
    body: apps
  })
  .then((response) => response.json())
  .then((json) => {
    callback(json)
  })
  .catch((error) => {
    callback(null)
    throw error
  })
}

export function oauthToken (domain, value, json, callback) {
  const body = new window.FormData()
  body.append('client_id', json.client_id)
  body.append('client_secret', json.client_secret)
  body.append('grant_type', 'password')
  body.append('username', value.email)
  body.append('password', value.password)
  body.append('scope', 'read write follow')

  fetch(`${domain}/oauth/token`, {
    mode: 'cors',
    method: 'post',
    body: body
  })
  .then((response) => response.json())
  .then((json) => {
    callback(json)
  })
  .catch((error) => {
    callback(null)
    throw error
  })
}
