<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind:="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.fieLd}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :pla1ceholder="item.placeholder">
                  <el-option
                    v-for="(option, index) in item.options"
                    :key="index"
                    :value="option.value"
                    v-model="formData[`${item.fieLd}`]"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <!-- 可以通过v-bind 把属性通过对象的方式 使用到组件上 -->
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.fieLd}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, computed } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      //数据类型限制 PropType需要一个泛型
      type: Array as PropType<IFormItem[]>,
      //   默认值如果不是基本数据类型需要 写成函数
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    //elementPlus的栅格响应式属性 根据不同分辨率的 栅格占比
    // 可以外部决定 栅格占比
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 父子组件实现双向绑定 并且符合单向数据流 这里需要把原来的对象结构出来 相当于浅拷贝一份
    const formData = computed(() => ({ ...props.modelValue }))
    // 监听数据变化 再把当前数据发送到父组件中
    // 深度监听formData中的数据 》》通过组件的v-model属性子传父亲

    // watch(props.modelValue, (newValue) => {

    // })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    return { formData }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
  .el-select {
    width: 100%;
  }
}
</style>
