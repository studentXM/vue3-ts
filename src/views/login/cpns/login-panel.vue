<template>
  <div class="login-panel">
    <h2 class="title">管理后台</h2>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      :stretch="true"
      v-model="currentTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
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
    // 声明accountRef的时候指定了类型限制 好处在于有更多的错误提示比如使用了不存在的方法
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')
    const handleLoginClick = () => {
      // 因为accountRef有类型限制 所以使用的方法会被检测是否存在 这样是有好处的
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value) //记住密码的开关传递到登陆组件里 来判断是否存储账号密码
      } else {
        console.log('phoneRef调用')
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
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
