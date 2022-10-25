import { Module } from 'vuex' //这是一个接口
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

// const pageUrlMap = {
//   users: '/api/users/abc/list'
// }

const systemModule: Module<ISystemState, IRootState> = {
  // 命名作用域
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeusersList(state, userList: any[]) {
      state.userList = userList
    },
    changeusersCount(state, userCount: number) {
      state.userCount = userCount
    },
    // 小写
    changeroleList(state, list: any[]) {
      state.roleList = list
    },
    changeroleCount(state, count: number) {
      state.roleCount = count
    }
  },
  getters: {
    // 根据url 来返回对应的list数据 给table组件
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
            break
          case 'role':
            return state.roleList
            break
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      // 获取url
      // let url = ''
      const { pageUrl } = payload
      // 方法1：取得组件传递的url类型 拼接后缀发送请求
      const url = `/${payload.pageUrl}/list`
      // 放法2：判断payload.pageUrl的值 修改url发送请求
      // switch (pageUrl) {
      //   case 'users':
      //     url = '/users/list'
      //     break
      //   case 'role':
      //     url = '/role/list'
      //     break
      // }
      //   发送请求
      const pageResult = await getPageListData(url, payload.queryInfo)

      // 将数据存储到vuex中
      const { list, totalCount } = pageResult.data
      // 拼接变量 动态的调用存储函数
      commit(`change${pageUrl}List`, list)
      commit(`change${pageUrl}Count`, totalCount)
    }
  }
}

export default systemModule
