<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/log.png" alt="" class="logoimg" />
      <span v-if="!collapse">xSystem</span>
    </div>
    <div>
      <el-menu
        :default-active="defaultValue"
        active-text-color="#409eff"
        class="el-menu-vertical"
        :unique-opened="true"
        :collapse="collapse"
      >
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <el-icon
                  ><component
                    :is="item.icon.replace('el-icon-', '')"
                    style="width: 16px; height: 16px"
                  ></component
                ></el-icon>

                <span>{{ item.name }}</span>
              </template>

              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item
                  :index="subitem.id + ''"
                  @click="handleMenuItemClick(subitem)"
                >
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>

          <template v-else-if="item.type === 2">
            <el-menu-item :index="item.id + ''">
              <component
                :is="item.icon"
                style="width: 16px; height: 16px"
              ></component>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // 取得vuex
    const store = useStore()
    // 取得vuex内的菜单列表
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path
    // data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')

    // 菜单导航点击事件
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  .logo {
    // color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 40px;
    background: #fff;
    span {
      font-size: 22px;
      font-weight: 200;
    }
    .logoimg {
      // flex: 0.7;
      width: 20px;
      margin-right: 5px;
    }
  }
  .tac {
    width: 100%;
  }
}
.el-menu {
  border-right: none;
}
</style>
