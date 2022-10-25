<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <PageContent
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
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const showSelect = (v: any) => {
      console.log(v)
    }
    return {
      contentTableConfig,
      searchFormConfig,
      showSelect
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
