export const basicRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: { showHeader: true, title: 'Home', requiresAuth: true, keepAlive: true}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: { showHeader: false,title: 'Login',requiresAuth: false, keepAlive: false}
  },
  {
    path: '/buyDmd',
    name: 'buyDmd',
    component: () => import('@/views/buyDmd.vue'),
    meta: { showHeader: true, title: 'Buy Dmd', requiresAuth: true, keepAlive: true}
  },
  {
    path: '/qrpay',
    name: 'QRPay',
    component: () => import('@/views/QRBuy.vue'),
    meta: { showHeader: false, title: 'QR Pay', requiresAuth: true, keepAlive: true}
  },
  {
    path: '/sendDmd',
    name: 'sendDmd',
    component: () => import('@/views/sendDmd.vue'),
    meta: { showHeader: true, title: 'Send Dmd', requiresAuth: true, keepAlive: true}
  },
  {
    path: '/assistant',
    name: 'assistant',
    component: () => import('@/views/assistant.vue'),
    meta: { showHeader: true, title: 'Assistant', requiresAuth: true, keepAlive: true}
  },
  {
    path: '/historyDetails',
    name: 'historyDetails',
    component: () => import('@/views/historyDetails.vue'),
    meta: { showHeader: true, title: 'History Details', requiresAuth: true, keepAlive: true}
  },
  {
    path: "/playerShare",
    name: "playerShare",
    component: () => import("@/views/share/playerShare/index.vue"),
    meta: {
      title: "Player Share",
      requiresAuth: false,
      showHeader: false,
      keepAlive: false
    }
  },
  {
    path: "/customerShare",
    name: "customerShare",
    component: () => import("@/views/share/customerShare/index.vue"),
    meta: {
      title: "Customer Share",
      requiresAuth: false,
      showHeader: false,
      keepAlive: false
    }
  },
  {
    path: "/facebookShare",
    name: "facebookShare",
    component: () => import("@/views/share/facebookShare/index.vue"),
    meta: {
      title: "Facebook Share",
      requiresAuth: false,
      showHeader: false,
      keepAlive: false
    }
  },
]

/** history 模式下重定向到 home页 */
export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/home',
  isHidden: true
}
