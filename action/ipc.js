const { ipcMain, net } = require('electron')

ipcMain.on('OATH_SUBMIT', (event, store) => {
  const request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: store.value,
    port: 443,
    path: '/api/v1/instance'
  })

  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`)
    })
    response.on('end', () => {
      console.log('No more data in response.')
    })
  })

  request.end()
})
