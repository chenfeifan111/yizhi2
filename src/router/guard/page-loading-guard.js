import { showLoadingToast,closeToast,showToast } from 'vant';
import { authorizationApi } from '@/api/auth'
import { useGlobalStore, useUserStore } from '@/stores'
export const createPageLoadingGuard = router => {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    // 判断是否有登录
    if (to.path === '/login') {
      //游戏跳转登录
      if (to.query.data) {
        userStore.$reset()
        userStore.clearStorage()
        return next()
      }else if (userStore.userInfo.nPlayerId) {
        console.log('已登录')
        return next({ path: "/home", replace: true ,force:true })
      }
    }else if (to.meta.requiresAuth){
      if (!userStore.userInfo.nPlayerId) {
        userStore.$reset()
        userStore.clearStorage()
        return next({ path: "/login", replace: true ,force:true })
      }
    }
    // * 判断当前路由是否需要访问权限
    if (!to.matched.some(record => record.meta.requiresAuth)) return next();
    // 权限认证
    if (!userStore.hasPermission(to.path)) {
      showLoadingToast({
        message: 'Loading...',
        forbidClick: true,
        duration: 0
      });
      await authorizationApi({sPath:to.path}).then(() => {
        userStore.addPermission(to.path)
      }).catch(() => {
        return next({ path: "/login", replace: true ,force:true })
      })
    }
    const globalStore = useGlobalStore()
    if(to.meta?.keepAlive){
      globalStore.addCachedView(to)
    }
    //过场动画处理
    if(to.path===from.path){
      to.meta.transformName=''
    }else{
      const toDepth = to.path.split('/');
      const fromDepth = from.path.split('/');
      const isPush = (toDepth.length > fromDepth.length) || (toDepth[toDepth.length-1].length>=fromDepth[fromDepth.length-1].length);
      to.meta.transformName = isPush ? 'scale-slide' : 'scale-slide-back';
    }
    next()
  })

  router.afterEach(() => {
    closeToast()
  })

  router.onError(router.onError((error) => {
    const pattern = /Failed .*imported module/g
    // vue-router 在跳路由加载对应页面js文件失败时，错误信息是 TypeError: Failed to fetch dynamically imported module
    if (pattern.test(error)) {
        closeToast()
        showDialog({
            title: 'Loaded Failed!',
            message: 'We will refresh the web page! You can retry after refresh! If the problem persists, Please contact us.',
        }).then(() => {
            window.location.reload(true) // 刷新后重新请求则是服务器最新文件，再次跳路由时则正确请求文件
        });
    }else {
        showToast("Processing Failed")
    }
}))
}
