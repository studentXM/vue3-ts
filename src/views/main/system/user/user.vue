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
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    // ts获取组件实例的方式 变量名称要和 ref的值对应
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handlequeryClick = (queryInfo: any) => {
      console.log(pageContentRef.value)
      pageContentRef.value?.getPageData(queryInfo)
    }
    console.log(pageContentRef)
    return {
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handlequeryClick,
      pageContentRef
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
