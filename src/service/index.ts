// service统一出口
import HYRequest from './request'
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
      const token = ''
      console.log('实例拦截')
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
// 导出实例
export default hyRequest
