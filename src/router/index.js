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
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      mate: { title: '仪表板' }
    }]
  },
  {
    path: '/about',
    mate: { title: '关于' },
    component: Layout,
    redirect: '/about/index',
    children: [{
      path: '/about/index',
      name: 'About',
      component: () => import('@/views/about/index'),
      mate: { title: '关于Index' }
    },
    {
      path: '/about/a',
      name: 'A',
      redirect: '/about/a/c',
      component: () => import('@/views/about/a'),
      mate: { title: '关于A' },
      children: [{
        path: '/about/a/c',
        name: 'C',
        component: () => import('@/views/about/c'),
        mate: { title: '关于C' }
      }]
    }, {
      path: '/about/b',
      name: 'B',
      component: () => import('@/views/about/b'),
      mate: { title: '关于B' }
    },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
