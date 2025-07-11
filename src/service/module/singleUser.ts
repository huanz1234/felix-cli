import { myRequest2 } from '..'

myRequest2
  .request({
    url: '/api/users/1',
    method: 'GET',
  })
  .then((res) => {
    console.log(res)
  })
