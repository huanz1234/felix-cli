import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { myAxiosRequestConfig } from './type'

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
        return res.data
      },
      (error) => {
        console.log('全局响应拦截器错误')
        return Promise.reject(error)
      },
    )

    // 针对特定axios实例的拦截器
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

  request<T = any>(config: myAxiosRequestConfig<T>): Promise<T> {
    // 如果config中存在请求拦截器，则使用拦截器
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config as InternalAxiosRequestConfig) // 类型断言，将config转换为InternalAxiosRequestConfig类型
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: myAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: myAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: myAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: myAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
