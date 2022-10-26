<template>
  <div class="page-search">
    <div class="search">
      <!-- 这里的组件 v-modle其实就是  ：modelValue=“formData” 加上了 一个事件来接收子组件的传输 @update：modelValue-->
      <hy-form v-bind="searchFormConfig" v-model="formData">
        <!-- 具名插槽 -->
        <template #header>
          <div>检索</div>
        </template>
        <template #footer>
          <div class="footerdiv">
            <el-button type="primary" icon="refresh" @click="handleResetClick"
              >重置</el-button
            >
            <el-button type="primary" icon="search">搜索</el-button>
          </div>
        </template>
      </hy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form/index'

export default defineComponent({
  props: {
    searchFormConfig: {
      searchFormConfig: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field决定的
    // 因为表单需要变量接收实现双向绑定 但是我们的表单是组件 是动态决定显示表单类型的
    // 所以我们的变量也是动态对应表单的 所以动态的把配置文件中的类型取出来做 我们的变量
    //优化1 总结=》form双向绑定的变量 动态的与searchFormConfig中的类型fieLd对应 这样不会多出变量而且 也符合配置思想
    const formItems = (props.searchFormConfig as any).formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.fieLd] = ''
    }
    const formData = ref(formOriginData)

    // 当用户点击重置
    const handleResetClick = () => {
      console.log(formOriginData)
      formData.value = formOriginData
    }
    return { formData, handleResetClick }
  }
})
</script>

<style scoped lang="less">
.footerdiv {
  display: flex;
  justify-content: right;
  padding: 10px 20px 20px 0px;
}
</style>
