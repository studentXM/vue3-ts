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
    requestInterceptors: (config) => {
      console.log('接口拦截')
      return config
    }
  },
  showLoading: false
})
