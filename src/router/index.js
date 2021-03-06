import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
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
        component: () => import('@/views/dashboard'),
        meta: { title: '仪表板', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/usermanager',
    meta: { title: '用户管理', icon: 'unordered-list' },
    component: Layout,
    redirect: '/usermanager/info',
    children: [
      {
        path: '/usermanager/info',
        name: 'Info',
        component: () => import('@/views/usermanager/info'),
        meta: { title: '用户信息', icon: 'smile' },
      },
      {
        path: '/usermanager/online',
        name: 'Online',
        component: () => import('@/views/usermanager/online'),
        meta: { title: '在线用户', icon: 'smile' }
      },
      {
        path: '/usermanager/rebate',
        name: 'Rebate',
        component: () => import('@/views/usermanager/rebate'),
        meta: { title: '返利明细', icon: 'smile' }
      },
      {
        path: '/usermanager/promotion-rebate',
        name: 'PromotionRebate',
        component: () => import('@/views/usermanager/promotion-rebate'),
        meta: { title: '推广明细', icon: 'smile' }
      },
      {
        path: '/usermanager/withdraw-rebate',
        name: 'WithdrawRebate',
        component: () => import('@/views/usermanager/withdraw-rebate'),
        meta: { title: '提取返利记录', icon: 'smile' }
      },
      {
        path: '/usermanager/dat-rebate',
        name: 'DatRebate',
        component: () => import('@/views/usermanager/dat-rebate'),
        meta: { title: '玩家每天返利', icon: 'smile' }
      },
      {
        path: '/usermanager/rank-rebate',
        name: 'RankRebate',
        component: () => import('@/views/usermanager/rank-rebate'),
        meta: { title: '查看返利排行', icon: 'smile' }
      }
    ]
  },
  {
    path: '/system',
    meta: { title: '系统维护', icon: 'setting' },
    component: Layout,
    redirect: '/system/setting',
    children: [
      {
        path: '/system/setting',
        name: 'Setting',
        component: () => import('@/views/system/setting'),
        meta: { title: '系统设置', icon: 'smile' }
      },
      {
        path: '/system/broadcast',
        name: 'Broadcast',
        component: () => import('@/views/system/broadcast'),
        meta: { title: '广播设置', icon: 'smile' }
      },
      {
        path: '/system/mail',
        name: 'Mail',
        component: () => import('@/views/system/mail'),
        meta: { title: '邮件设置', icon: 'mail' }
      },
      {
        path: '/system/recharge',
        name: 'Recharge',
        component: () => import('@/views/system/recharge'),
        meta: { title: '充值设置', icon: 'smile' }
      },
      {
        path: '/system/activity',
        name: 'Activity',
        component: () => import('@/views/system/activity'),
        meta: { title: '活动设置', icon: 'smile' }
      },
      {
        path: '/system/vip',
        name: 'Vip',
        component: () => import('@/views/system/vip'),
        meta: { title: 'VIP设置', icon: 'smile' }
      },
      {
        path: '/system/game',
        name: 'Game',
        component: () => import('@/views/system/game'),
        meta: { title: '游戏设置', icon: 'smile' }
      }
    ]
  },
  {
    path: '/game-controller',
    meta: { title: '游戏控制', icon: 'control' },
    component: Layout,
    redirect: '/game-controller/zhajinhua',
    children: [
      {
        path: '/game-controller/zhajinhua',
        name: 'zhajinhua',
        component: () => import('@/views/game-controller/zhajinhua'),
        meta: { title: '炸金花', icon: 'smile' }
      },
      {
        path: '/game-controller/bairenjinhua',
        name: 'bairenjinhua',
        component: () => import('@/views/game-controller/bairenjinhua'),
        meta: { title: '百人金花', icon: 'smile' }
      },
      {
        path: '/game-controller/baijiale',
        name: 'baijiale',
        component: () => import('@/views/game-controller/baijiale'),
        meta: { title: '百家乐', icon: 'smile' }
      },
      {
        path: '/game-controller/longhu',
        name: 'longhu',
        component: () => import('@/views/game-controller/longhu'),
        meta: { title: '龙虎大战', icon: 'smile' }
      },
      {
        path: '/game-controller/honghei',
        name: 'honghei',
        component: () => import('@/views/game-controller/honghei'),
        meta: { title: '红黑大战', icon: 'smile' }
      },
      {
        path: '/game-controller/rummy',
        name: 'rummy',
        component: () => import('@/views/game-controller/rummy'),
        meta: { title: 'Rummy', icon: 'smile' }
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
