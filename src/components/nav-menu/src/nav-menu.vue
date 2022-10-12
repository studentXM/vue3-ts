<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/log.png" alt="" class="logoimg" />
      <span v-if="!collapse">xinmuSystem</span>
    </div>
    <div>
      <el-menu
        default-active="2"
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
                <el-menu-item :index="subitem.id + ''">
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

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
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
    // color: white;
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
.el-menu {
  border-right: none;
}
</style>
