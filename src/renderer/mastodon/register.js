const { fetch, FormData } = window

export function postApps (user) {
  const { hostname } = user

  const body = new FormData()
  body.append('client_name', document.title)
  body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
  body.append('scopes', 'read write follow')

  return fetch(`https://${hostname}/api/v1/apps`, {
    method: 'POST',
    body: body,
    mode: 'cors'
  })
  .then(response => response.json())
}
