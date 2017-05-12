export const parser = (path = '/') => {
  const parser = document.createElement('a')
  parser.href = `https://localhost:3000${path}`
  return {
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash
  }
}
