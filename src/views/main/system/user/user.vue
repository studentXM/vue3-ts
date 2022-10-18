<template>
  <div class="user">
    <div class="search">
      <HyForm :formItems="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form/index'
export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '张三',
        rules: [],
        placeholder: '测试'
      },
      {
        type: 'password',
        label: '张三的密码',
        rules: [],
        placeholder: '测试'
      },
      {
        type: 'select',
        label: '张三的运动',
        rules: [],
        placeholder: '测试',
        options: [{ title: '足球' }, { title: 'game' }]
      },
      {
        type: 'datepicker',
        label: '张三出生',
        rules: [],
        placeholder: '测试'
      }
    ]
    return { formItems }
  }
})
</script>

<style scoped></style>
