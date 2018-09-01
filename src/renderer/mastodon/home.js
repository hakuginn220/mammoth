const { fetch, Headers } = window

export function getMyAccount(user) {
  const { hostname, accessToken } = user

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)

  return fetch(`https://${hostname}/api/v1/accounts/verify_credentials`, {
    headers: headers,
    mode: 'cors'
  }).then(response => response.json())
}
