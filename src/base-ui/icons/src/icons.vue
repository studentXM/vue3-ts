<template>
  <div>
    {{ Iconsname }}

    <el-icon><component :is="Iconsname"></component></el-icon>
    <span>{{ Iconsname }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    Iconsname: String
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
