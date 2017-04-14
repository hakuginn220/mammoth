const webview = document.querySelector('.webview')
const frontend = document.querySelector('.frontend')
const backend = document.querySelector('.backend')

webview.addEventListener('dom-ready', () => {
  frontend.className = 'frontend is-load'
  backend.className = 'backend is-load'
})
