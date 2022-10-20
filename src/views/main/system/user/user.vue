<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return { searchFormConfig }
  }
})
</script>

<style scoped lang="less">
.footerdiv {
  text-align: right;
  padding: 0 50px 22px 0;
}
</style>
