import myRequest from '../index'

interface IHomeData {
  code: number
  data: {
    status: string
    timestamp: string
  }
  message: string
}

myRequest
  .request<IHomeData>({
    url: '/api/status',
    method: 'GET',
    data: {},
  })
  .then((res) => {
    console.log(res)
  })
