import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hyRequest from './service'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
