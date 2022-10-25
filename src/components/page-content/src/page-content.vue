<template>
  <div class="page-content">
    <hy-table :listData="userList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <el-button
          >刷新<el-icon><Refresh /></el-icon
        ></el-button>
      </template>
      <template #status="scope">
        <el-button
          size="default"
          :plain="true"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ proxy.$filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ proxy.$filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="bandle-btns">
          <el-button size="small" :text="true" :link="true">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue'

import { useStore } from '@/store'
import HyTable from '@/base-ui/table'
export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    // vuex actions 里的方法
    store.dispatch('system/getPageListAction', {
      pageUrl: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const { proxy }: any = getCurrentInstance()
    const userList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    // 接收选中
    return { proxy, userList }
  }
})
</script>

<style scoped></style>
