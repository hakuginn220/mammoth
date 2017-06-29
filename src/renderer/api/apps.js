export default function (hostname) {
  return new Promise((resolve, reject) => {
    const body = new window.FormData()
    body.append('client_name', document.title)
    body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
    body.append('scopes', 'read write follow')

    window.fetch(`https://${hostname}/api/v1/apps`, {
      mode: 'cors',
      method: 'POST',
      body: body
    })
    .then(response => response.json())
    .then(object => {
      resolve(object)
    })
    .catch(error => {
      reject(error)
    })
  })
}
