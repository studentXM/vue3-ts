<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
    >
      <!-- 显示 选中按钮s -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="40"
      ></el-table-column>
      <!-- 显示 ID -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <!-- el-table-column 可以传入插槽 -->
        <el-table-column v-bind="propItem" align="center">
          <!-- default是table标签自带的插槽名 scope是作用域插槽的值 -->
          <!-- 注意scope不能直接输出到页面 但是可以当作函数的参数来显示 -->
          <template #default="scope">
            <!-- scope有当前列表的列数id 以及所有的信息 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <div class="demo-pagination-block">
          <div class="demonstration"></div>
          <el-pagination
            :currentPage="page.current"
            :page-size="page.size"
            :page-sizes="[10, 20, 30]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { propListType } from '../types/index'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      defalut: 0
    },
    propList: {
      type: Array as PropType<propListType[]>,
      require: true
    },
    // 是否显示序号
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 是否显示选中按钮
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => {
        return { currentPage: 0, pageSize: 10 }
      }
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (v: any) => {
      // 把选中的数据 发送给父组件
      emit('selectionChange', v)
    }

    const handleSizeChange = (pageSize: number) => {
      // 因为双向绑定的是一个对象 我们传递回去的值也是个对象 那么则结构里面的属性 修改我们发生变化的属性
      emit('update:page', { ...props.page, pageSize })
      console.log(pageSize)
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage: currentPage - 1 }) // currentPage是事件函数传递的数值 默认是1 但是我们用到了偏移 所以默认得是0
      console.log(currentPage)
    }

    return { handleSelectChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.footer {
  padding-top: 10px;
  display: flex;
  justify-content: right;
}
</style>
