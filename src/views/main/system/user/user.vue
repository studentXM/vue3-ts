<template>
  <div class="user">
    <!-- 搜索组件 传递的是 也是显示内容配置 -->
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handlequeryClick"
    />
    <div class="content">
      <!-- Table组件 传递的是table渲染的prop对象等属性 pageName是用来区分请求的  -->
      <PageContent
        ref="PageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

// 引入hook
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
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
.footerdiv {
  text-align: right;
  padding: 0 50px 22px 0;
}
.content {
  border-top: 10px #f4f4f4ad solid;
  padding: 0px 20px 10px 20px;
}
</style>
