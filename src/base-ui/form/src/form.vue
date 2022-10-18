<template>
  <div class="hy-form">
    <el-form label-width="100px">
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
                  <!-- <el-option v-for="option in item.options"></el-option> -->
                </el-select>
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
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
