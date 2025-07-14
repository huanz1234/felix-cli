import { myRequest2 } from '..'
import type { AxiosResponse } from 'axios'

myRequest2
  .request({
    url: '/api/users/1',
    method: 'GET',
  })
  .then((res) => {
    console.log(res)
  })

// 针对单个特定网络请求添加拦截器
myRequest2
  .request({
    url: '/api/users',
    method: 'GET',
    interceptors: {
      requestSuccessFn: (config) => {
        console.log('针对单个特定网络请求的拦截器')
        return config
      },
      requestFailureFn: (error) => {
        console.log('针对单个特定网络请求的拦截器错误')
        return Promise.reject(error)
      },
      responseSuccessFn: (res: AxiosResponse) => {
        console.log('针对单个特定网络请求的拦截器')
        return res
      },
      responseFailureFn: (error) => {
        console.log('针对单个特定网络请求的拦截器错误')
        return Promise.reject(error)
      },
    },
  })
  .then((res) => {
    console.log(res)
  })
