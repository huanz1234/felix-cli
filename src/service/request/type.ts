import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface myInterceptor<T = AxiosResponse> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (error: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (error: any) => any
}

// 针对特定axios实例的拦截器类型
export interface myAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: myInterceptor<T>
}
