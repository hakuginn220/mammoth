const { fetch, Headers } = window

export function getHomeTimeline(user) {
  const { hostname, accessToken } = user

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)

  return fetch(`https://${hostname}/api/v1/timelines/home`, {
    headers: headers,
    mode: 'cors'
  }).then(response => response.json())
}

export function getPublicTimeline(user) {
  const { hostname } = user

  return fetch(`https://${hostname}/api/v1/timelines/public`, {
    mode: 'cors'
  }).then(response => response.json())
}
