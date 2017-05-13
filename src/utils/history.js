export const parser = (path = '/') => {
  const parser = document.createElement('a')
  parser.href = `http://localhost${path}`
  const { pathname, search, hash } = parser
  return { pathname, search, hash }
}
