import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

interface myInterceptor {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (error: any) => any
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
  responseFailureFn?: (error: any) => any
}

// 针对特定请求的拦截器类型
interface myAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: myInterceptor
}

class Request {
  instance: AxiosInstance
  constructor(config: myAxiosRequestConfig) {
    this.instance = axios.create(config)

    // 拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截器')
        return config
      },
      (error) => {
        console.log('全局请求拦截器错误')
        return Promise.reject(error)
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截器')
        return res
      },
      (error) => {
        console.log('全局响应拦截器错误')
        return Promise.reject(error)
      },
    )

    // 针对特定请求的拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn,
      )

      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn,
      )
    }
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get(url: string, config: AxiosRequestConfig) {
    return this.instance.get(url, config)
  }

  post(url: string, data: any, config: AxiosRequestConfig) {
    return this.instance.post(url, data, config)
  }

  put(url: string, data: any, config: AxiosRequestConfig) {
    return this.instance.put(url, data, config)
  }

  delete(url: string, config: AxiosRequestConfig) {
    return this.instance.delete(url, config)
  }

  patch(url: string, data: any, config: AxiosRequestConfig) {
    return this.instance.patch(url, data, config)
  }

  postForm(url: string, data: any, config: AxiosRequestConfig) {
    return this.instance.postForm(url, data, config)
  }
}

export default Request
