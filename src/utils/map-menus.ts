// 从vuerouter导出一个类型
import { RouteRecordRaw } from 'vue-router'
// 返回值是一个route类型
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  console.log(userMenus)
  // 先加载默认所有的routes 所有ts文件
  const allRoutes: RouteRecordRaw[] = []
  //递归取得该路径下的所有ts文件 以数组的方式存储
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //循环
  routeFiles.keys().forEach((key) => {
    // console.log(key) 显示的是所有ts在main下的路径 ./开头
    // 引入文件 拼接路径 然后把这个模块对象push到 数组内
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  //根据菜单获取需要添加的routes

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      //type为2 代表是子级 并且自身没有子数据
      if (menu.type === 2) {
        // 当前的所有ts文件 和 角色具备的路由进行对应 用find只让他执行一次
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        // 若有值 push到routes
        if (route) routes.push(route)
        //type为1 代表为父级 所以进行递归调用
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
