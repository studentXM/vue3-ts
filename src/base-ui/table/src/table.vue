<template>
  <div>
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <!-- el-table-column 可以传入插槽 -->
        <el-table-column v-bind="propItem" align="center">
          <!-- default是table标签自带的插槽名 scope是作用域插槽的值 -->
          <!-- 注意scope不能直接输出到页面 但是可以当作函数的参数来显示 -->
          <template #default="scope">
            <!-- scope有当前列表的列数id 以及所有的信息 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ propItem.prop }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { propListType } from '../types/index'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
