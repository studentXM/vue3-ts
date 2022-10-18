<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input :placeholder="item.placeholder"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="(option, index) in item.options"
                    :key="index"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <!-- 可以通过v-bind 把属性通过对象的方式 使用到组件上 -->
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      //数据类型限制 PropType需要一个泛型
      type: Array as PropType<IFormItem[]>,
      //   默认值如果不是基本数据类型需要 写成函数
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 30px;
    background: red;
  }
}
</style>
