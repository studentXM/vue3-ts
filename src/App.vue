<template>
  <div>
    <router-link to="login">登陆</router-link>
    <router-link to="main">首页</router-link>
    <router-view></router-view>
    <el-button>123</el-button>
    <el-button>awdawd</el-button>
    <el-button>awdawd</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a1622;
  margin-top: 60px;
}
</style>
