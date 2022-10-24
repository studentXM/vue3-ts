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
            <el-button type="primary" icon="refresh">重置</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      soprt: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped></style>
