const { ipcMain, net } = require('electron')

ipcMain.on('OATH_SUBMIT', (event, store) => {
  const request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: store.value,
    port: 443,
    path: '/api/v1/instance'
  })

  request.on('error', (error) => {
    console.log(error)
    event.sender.send('OATH_SUBMIT_FAIL')
  })

  request.on('response', (response) => {
    response.on('data', (data) => {
      event.sender.send('OATH_SUBMIT_SUCCESS', JSON.parse(data))
    })
  })

  request.end()
})
