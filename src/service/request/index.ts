import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
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
