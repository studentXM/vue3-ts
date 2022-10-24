<template>
  <div class="header">
    <el-icon @click="handleFoldClick" :size="28.1">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <HyBreadcrumb :breadcrumbds="breadcrumbds" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcurmb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑数据
    const store = useStore()
    const route = useRoute()

    const breadcrumbds = computed((): IBreadcrumb[] => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, handleFoldClick, breadcrumbds }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  .el-icon {
    margin-right: 6px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
