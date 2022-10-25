import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
// 样式重置需要安装normalize.css
import 'normalize.css'
import './assets/css/index.less'
// import Request from './service'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局的一些方法
import { globalRegister } from '@/global/index'
const app = createApp(App)
app.use(store)
// 刷新以后vuex的数据将丢失 重新从缓存当中取值 然后赋值给vuex
// setupStore 会添加从后台返回的路由 所以需要在router路由绑定之前调用
setupStore()
app.use(router)
app.use(globalRegister)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// Request.request<DataType>({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     // 请求拦截 在请求之前可以对 config进行设置 比如设置一些请求头什么的 这个config就是上面的几个属性
//     requestInterceptors: (config) => {
//       // console.log(config)
//       console.log('-------------- 单个请求拦截')
//       return config
//     },
//     responseInterceptors: (res) => {
//       // console.log(res)
//       return res
//     }
//   },
//   showLoading: true
// }).then((res) => {
//   console.log(res)
// })

// Request.get<DataType>({}).then((res) => {
//   console.log(res)
// })
