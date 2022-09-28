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
  method: 'GET'
})

console.log(process.env.VUE_APP_BASE_NAME)
