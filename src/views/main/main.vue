<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="container-aside">
        <NavMenu :collapse="isCollapse" />
      </el-aside>
      <el-container class="container-content">
        <el-header class="container-header">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="container-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavHeader from '@/components/nav-header/index'
// import cache from '@/utils/cache'
import NavMenu from '@/components/nav-menu/index'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
      console.log(isCollapse.value)
    }
    return {
      isCollapse,
      handleFoldChange
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
      transition: width 300ms;
      height: 100%;
      // background: rgb(70, 70, 70);
    }
    .container-content {
      // 头部
      .container-header {
        line-height: 60px;
        height: 60px;
        background: #fff;
        box-shadow: 2px -1px 5px 1px rgb(223, 223, 223);
        .header-left {
          display: flex;
          align-items: center;
          .el-icon {
            cursor: pointer;
            margin-right: 6px;
          }
        }
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
