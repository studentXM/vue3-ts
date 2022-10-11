<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/log.png" alt="" class="logoimg" />
      <span>xinmuSystem</span>
    </div>
    <div>
      <el-menu default-active="2" class="el-menu-vertical">
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-sub-menu>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </template>

          <template v-else-if="item.type === 2">
            <el-menu-item :index="item.id">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    console.log(userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  .logo {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      font-size: 22px;
      font-weight: 200;
    }
    .logoimg {
      width: 30%;
    }
  }
  .tac {
    width: 100%;
  }
}
</style>
