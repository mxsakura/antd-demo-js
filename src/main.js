import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(Antd);

// 配置NProgress进度条选项 —— 动画效果
NProgress.configure({ ease: 'ease', speed: 500 })

// 全局路由拦截-进入页面前执行
router.beforeEach((to, from, next) => {
  // NProgress开始进度条
  NProgress.start()
  next()
})

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  // NProgress结束进度条
  NProgress.done()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
