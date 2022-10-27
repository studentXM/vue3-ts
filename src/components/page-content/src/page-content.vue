<template>
  <div class="page-content">
    <!-- v-model:pag 组件的v-model 默认是 :modeValue 这里给v-model一个修饰符其实只是把modeValue改成了page -->
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
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
import { defineComponent, computed, getCurrentInstance, ref, watch } from 'vue'

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

    // 双向绑定pageInfo
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })

    // vuex actions 里的方法 网络请求table
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageUrl: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * pageInfo.value.currentPage, //偏移 当前数据的位置 比如我们这次请求了十条 从 1-10 下一次就从11-20
          size: pageInfo.value.pageSize, //每次请求的数量
          ...queryInfo
        }
      })
    }
    getPageData()

    // 监听我们的分页对象 如果数据发生变化代表 点击了分页 重新发送请求
    watch(pageInfo, () => {
      getPageData()
    })

    const { proxy }: any = getCurrentInstance()
    const dataList = computed(() =>
      // 因为当前组件是一个共用组件 所以需要把属性作为动态参数传递
      store.getters[`system/pageListData`](props.pageName)
    )

    const dataCount = computed(() =>
      // 因为当前组件是一个共用组件 所以需要把属性作为动态参数传递
      store.getters[`system/pageListDataCount`](props.pageName)
    )

    // 接收选中
    return { proxy, dataList, getPageData, dataCount, pageInfo }
  }
})
</script>

<style scoped></style>
