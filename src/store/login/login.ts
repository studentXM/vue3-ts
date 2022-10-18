import { Module } from 'vuex'
import localCache from '@/utils/cache'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import { IAccount } from '@/service/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { mapMenuToRoutes } from '@/utils/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeuserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    // 如果刚登陆则取值 如果已经登陆然后刷新 那么从本地存储里面取值
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // //userMenus => routes
      // const routes = mapMenuToRoutes(userMenus)
      // //将routes
      // routes.forEach((route) => {
      //   // 给main添加子路由
      //   router.addRoute('main', route)
      // })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log(commit)
      // 请求登陆
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token) //vuex
      localCache.setCache('token', token) // 存储

      //请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeuserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenu = userMenusResult.data
      commit('changeUserMenus', userMenu)
      localCache.setCache('userMenu', userMenu)

      // 跳转到首页
      router.push('/main')
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeuserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenu')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
