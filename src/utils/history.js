import { Map } from 'immutable'

export const parser = (path = '/') => {
  const parser = document.createElement('a')
  parser.href = `http://localhost${path}`
  const { pathname, search, hash } = parser
  return { pathname, search, hash }
}

export const search = (search) => {
  return Map(search.slice(1).split('&').map((value) => value.split('=')))
}
