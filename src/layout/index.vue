<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Menu :collapsed="collapsed" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <keep-alive>
          <router-view />
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from './components/menu'
import { mapGetters } from 'vuex'
export default {
  components: {
    Menu
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapGetters(['MenuCollapsed'])
  },
};
</script>
<style lang="scss">
#components-layout-demo-custom-trigger {
    min-height: 100vh;
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }
    .trigger:hover {
        color: #1890ff;
    }
    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
}
</style>
