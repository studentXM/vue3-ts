<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <div class="content">
      <PageContent
        :contentTableConfig="contentTableConfig"
        pageName="role"
        ref="PageContentRef"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

// 引入hook
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    // 结构函数返回的数组 里面是PageContent的对应的方法
    const [PageContentRef, handleResetClick, handlequeryClick] = usePageSearch()

    return {
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handlequeryClick,
      PageContentRef
    }
  }
})
</script>

<style scoped lang="less">
.content {
  border-top: 10px solid #f4f4f4ad;
  padding: 0 20px 10px 20px;
}
.role {
}
</style>
