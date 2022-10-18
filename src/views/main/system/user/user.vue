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
        options: [
          { title: '足球', value: 'football' },
          { title: '游戏', value: 'game' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return { formItems }
  }
})
</script>

<style scoped lang="less"></style>
