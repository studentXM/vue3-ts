<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
        <span>{{ name }}</span>
        <el-avatar :size="40" :src="circleUrl" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
          <el-dropdown-item icon="UserFilled">用户信息</el-dropdown-item>
          <el-dropdown-item icon="PieChart">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs, computed } from 'vue'
import { useStore } from '@/store'
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const store = useStore()
const name = computed(() => {
  return store.state.login.userInfo.name
})
const { circleUrl } = toRefs(state)
</script>
<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  .el-avatar {
    margin-left: 6px;
  }
}
</style>
