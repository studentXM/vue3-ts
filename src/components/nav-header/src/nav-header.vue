<template>
  <div class="header">
    <el-icon @click="handleFoldClick" :size="28.1">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>用户信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 6px;
    cursor: pointer;
  }
  .content {
    flex: 1;
  }
}
</style>
