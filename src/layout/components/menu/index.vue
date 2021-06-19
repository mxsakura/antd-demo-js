<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="logo"/>
    <a-menu theme="dark" mode="inline" v-model="menus" :default-selected-keys="[activeMenu]" :default-open-keys="openSubMenus">
      <template v-for="item in list">
        <template v-if="!item.hidden&&item.children">
          <a-menu-item v-if="item.children.length<2" :key="item.children[0].path" @click="routerHandler(item.children[0].path)">
            <a-icon v-if="item.children[0].mate.icon" :type="item.children[0].mate.icon" />
            <span>{{ item.children[0].mate.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import SubMenu from './SubMenu'
export default {
  components: {
    SubMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      list: this.$router.options.routes,
      menus: [],
      a: 0
    }
  },
  computed: {
    activeMenu() {
      return this.$route.path;
    },
    openSubMenus() {
      let menus = this.$route.path.split('/').filter(item => item != '');
      for (let i = 0; i < menus.length; i++) {
        if (i > 0) {
          menus[i] = menus[i - 1] + '/' + menus[i];
        } else {
          menus[i] = '/' + menus[i];
        }
      }
      return menus;
    }
  },
  updated() {
    if (this.menus != this.openSubMenus) {
      this.menus = this.openSubMenus;
    }
  },
  methods: {
    routerHandler(path) {
      if (this.$route.path !== path) this.$router.push({ path: path });
    }
  }
}
</script>