<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" label-width="60px" ref="forRef">
      <!-- props 的值 对应 rules里面的属性 才能进行校验 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
// 导入账号验证配置对象
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const forRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      console.log()
    }

    return {
      account,
      rules,
      loginAction,
      forRef
    }
  }
})
</script>

<style scoped></style>
