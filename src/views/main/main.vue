<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px" class="container-aside">
        <NavMenu />
      </el-aside>
      <el-container class="container-content">
        <el-header class="container-header">Header</el-header>
        <el-main class="container-main"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// import cache from '@/utils/cache'
import NavMenu from '@/components/nav-menu/index'
export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    const store = useStore()
    console.log(store.state.login.userInfo)
    return {
      store
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .container-aside {
      height: 100%;
      background: rgb(70, 70, 70);
    }
    .container-content {
      // 头部
      .container-header {
        line-height: 60px;
        height: 60px;
        background: #fff;
        box-shadow: 2px -1px 5px 1px rgb(223, 223, 223);
      }
      // 内容区
      .container-main {
        text-align: center;
        background: #f4f4f4ad;
      }
    }
  }
}
</style>
