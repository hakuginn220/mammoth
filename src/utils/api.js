const { fetch } = window

export async function apps (domain, body) {
  try {
    const url = `${domain}/api/v1/apps`
    const option = { mode: 'cors', method: 'post', body }
    const response = await fetch(url, option)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export async function oauthToken (domain, body) {
  try {
    const url = `${domain}/oauth/token`
    const option = { mode: 'cors', method: 'post', body }
    const response = await fetch(url, option)
    return await response.json()
  } catch (error) {
    throw error
  }
}
