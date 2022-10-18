import { createRouter, createWebHashHistory } from 'vue-router'
import { mapMenuToRoutes } from '@/utils/map-menus'
import store from '@/store'
import localCache from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] 这里需要根据usermenu来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 全局路由守卫 判断是否携带token
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // useStore只能在组件内使用 compositionApi内
  const userMenus = (store.state as any).login.userMenus
  //userMenus => routes
  const routes = mapMenuToRoutes(userMenus)
  //将routes
  routes.forEach((route) => {
    // 给main添加子路由
    router.addRoute('main', route)
  })
})

export default router
