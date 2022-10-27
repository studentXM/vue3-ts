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
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeusersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeusersCount(state, userCount: number) {
      state.usersCount = userCount
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
        // 这里的state[变量拼接字符串]在ts里需要给 state一个类型指定 所以用到了as (类型断言)
        const listData: any[] =
          // 这里需要把state断言成any
          (state as any)[`${pageName}List`] ?? [] //相当于state[`${pageName}List`]
        console.log(pageName)
        return listData
      }
    },
    // 根据url 来返回对应的list总数 给table组件
    pageListDataCount(state) {
      return (pageName: string) => {
        // 这里的state[变量拼接字符串]在ts里需要给 state一个类型指定 所以用到了as (类型断言)
        const listCount: number =
          // 这里需要把state断言成any
          (state as any)[`${pageName}Count`] ?? 0 //state[`${pageName}Count`]
        console.log(pageName)
        return listCount
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
