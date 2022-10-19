<template>
  <div class="user">
    <div class="search">
      <HyForm v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form/index'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
