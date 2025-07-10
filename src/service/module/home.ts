import myRequest from '../index'

myRequest
  .request({
    url: '/api/status',
    method: 'GET',
    data: {},
  })
  .then((res) => {
    console.log(res)
  })
