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
          <div class="page-info">
            <router-view></router-view>
          </div>
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
      border-right: 1px solid #efefef;
    }
    .container-content {
      // 头部
      .container-header {
        display: flex;
        align-items: center;
        line-height: 60px;
        height: 60px;
        background: #fff;
        border-bottom: 1px solid #efefef;
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
        padding: 8px;
        text-align: center;
        background: #f4f4f4ad;
        .page-info {
          background: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
