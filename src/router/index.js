import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//解决路由连续点击多次报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//路由集合
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/views/login/login'], resolve)
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/welcome',
    component: resolve => require(['@/components/layout/home'], resolve),
    children: [
      //首页
      {
        path: '/welcome',
        name: 'welcome',
        component: resolve => require(['@/components/views/welcome/welcome'], resolve)
      },
      //订单管理
      {
        path: '/order',
        name: 'order',
        component: resolve => require(['@/components/views/order/order'], resolve)
      },
      //生产调度
      {
        path: '/dispatch',
        name: 'dispatch',
        component: resolve => require(['@/components/views/dispatch/dispatch'], resolve)
      },
      //统计
      {
        path: '/statistics',
        name: 'statistics',
        component: resolve => require(['@/components/views/statistics/statistics'], resolve)
      },
      //产线监控
      {
        path: '/monitor',
        name: 'monitor',
        component: resolve => require(['@/components/views/monitor/monitor'], resolve)
      },
      //系统配置
      {
        path: '/configuration',
        name: 'configuration',
        component: resolve => require(['@/components/views/configuration/configuration'], resolve)
      },
      //设备管理
      {
        path: '/equipment',
        name: 'equipment',
        component: resolve => require(['@/components/views/equipment/equipment'], resolve)
      },
      //系统参数
      {
        path: '/parameter',
        name: 'parameter',
        component: resolve => require(['@/components/views/parameter/parameter'], resolve)
      },
    ]
  },
  ]
})

//挂载路由导航守卫
router.beforeEach(function (to, from, next) {
  //在这里可以设置路由拦截
  if (to.path == '/login') return next();
  const token = window.localStorage.getItem('token');
  if (!token) return next('/login');
  next();
})
//导出
export default router
