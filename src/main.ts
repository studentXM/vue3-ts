import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import HYRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

HYRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    // 请求拦截 在请求之前可以对 config进行设置 比如设置一些请求头什么的 这个config就是上面的几个属性
    requestInterceptors: (config) => {
      console.log(config)
      console.log('-------------- 单个请求拦截')
      return config
    }
  },
  showLoading: true
})
