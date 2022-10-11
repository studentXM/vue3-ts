// service统一出口
import HYRequest from './request'
import localCache from '@/utils/cache'
// 引入 axios配置 baseurl等
import { BASE_URL, BASE_OUT } from './request/config'
// 传入配置 并且生成实例
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: BASE_OUT,
  // 对应一个个拦截器
  interceptors: {
    // 请求拦截
    requestInterceptors: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        if (config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorsCatch: (error) => {
      return error
    },
    // 响应拦截
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (error) => {
      return error
    }
  }
})
export const weChat = new HYRequest({})
// 导出实例
export default hyRequest
