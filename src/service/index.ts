import Request from './request'
import { BASE_URL, TIMEOUT } from './config'

const myRequest = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

export const myRequest2 = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('针对特定请求的拦截器')
      return config
    },
    requestFailureFn: (error) => {
      console.log('针对特定请求的拦截器错误')
      return Promise.reject(error)
    },
    responseSuccessFn: (res) => {
      console.log('针对特定请求的拦截器')
      return res
    },
    responseFailureFn: (error) => {
      console.log('针对特定请求的拦截器错误')
      return Promise.reject(error)
    },
  },
})

export default myRequest
