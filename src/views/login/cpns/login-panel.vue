<template>
  <div class="login-panel">
    <h2 class="title">管理后台</h2>
    <el-tabs type="border-card" class="demo-tabs" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary"
        ><el-icon><Warning /></el-icon>忘记密码</el-link
      >
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<typeof LoginAccount>()

    const handleLoginClick = () => {
      console.log('LOGIN', accountRef.value?.rules)
      accountRef.value?.loginAction()
    }
    return { isKeepPassword, handleLoginClick, accountRef }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 400px;
  // display: flex;
  // align-content: center;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .custom-tabs-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .login-btn {
    font-size: 18px;
    height: 40px;
    width: 100%;
  }
}
</style>
