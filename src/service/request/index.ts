import axios from 'axios'
// 使用axios自带的类型
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// 请求拦截 响应拦截
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  // axios实例
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    // 生成一个axios实例保存到当前this.instance中
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 为当前axios实例 添加请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    // 为当前axios实例 添加响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    // 所有实例添加拦截器
    this.instance.interceptors.request.use((res) => {
      console.log('全局拦截')
      return res
    })
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
