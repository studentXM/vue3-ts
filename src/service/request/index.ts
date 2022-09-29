import axios from 'axios'

// 使用axios自带的类型
import type { AxiosInstance } from 'axios'
// 请求拦截 响应拦截
import type { HYRequestInterceptors, HYRequestConfig } from './type'

// 引入element加载组件
import { ElLoading } from 'element-plus'

import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEAFULT_LOADING = true
class HYRequest {
  // axios实例
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  // 存放loading实例 请求完成后用来释放loading
  loading?: LoadingInstance
  constructor(config: HYRequestConfig) {
    // 生成一个axios实例保存到当前this.instance中
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
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

    // 全局--所有实例添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'egba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    // 全局--所有实例添加响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截')
        // 移除loading
        this.loading?.close()
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }

    if (config.showLoading === false) {
      this.showLoading = false
    }

    this.instance
      .request(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        // 请求完毕以后 将设置为默认值 不然其他请求也会打开showloading
        this.showLoading = DEAFULT_LOADING
      })
      .catch((err) => {
        // 请求完毕以后 将设置为默认值 不然其他请求也会打开showloading
        this.showLoading = DEAFULT_LOADING
        return err
      })
  }
}

export default HYRequest
