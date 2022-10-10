<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" label-width="60px" ref="formRef">
      <!-- props 的值 对应 rules里面的属性 才能进行校验 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
// 导入账号验证配置对象
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '../../../utils/cache'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // 获取组件类型 并且指定
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((vaild) => {
        if (vaild) {
          console.log(localCache.getCache('kei'))
          if (isKeepPassword) {
            //如果勾选了记住密码 则做一个本地缓存
            console.log('记住密码')
            localCache.setCache('name', account.name, true)
            localCache.setCache('password', account.password, true)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2 开始登陆
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
