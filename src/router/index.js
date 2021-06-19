import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        mate: { title: '仪表板', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/about',
    mate: { title: '更多信息', icon: 'menu-unfold' },
    component: Layout,
    redirect: '/about/classifya',
    children: [
      {
        path: '/about/classifya',
        name: 'Classifya',
        component: () => import('@/views/about/classifya/index'),
        redirect: '/about/classifya/classifyc',
        mate: { title: '省份', icon: 'unordered-list' },
        children: [{
          path: '/about/classifya/classifyc',
          name: 'Classifyc',
          component: () => import('@/views/about/classifya/classifyc/index'),
          mate: { title: '湖北' }
        }]
      },
      {
        path: '/about/classifyb',
        name: 'Classifyb',
        component: () => import('@/views/about/classifyb/index'),
        mate: { title: '合作', icon: 'smile' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
