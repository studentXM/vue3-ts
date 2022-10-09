<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" label-width="50px">
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
import { defineComponent, reactive } from 'vue'
// 导入账号验证配置对象
import { rules } from '../config/account-config'
export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      console.log('开始登陆...')
    }

    return {
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
