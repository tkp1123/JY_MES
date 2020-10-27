import Vue from 'vue'
import Router from 'vue-router'
import {
  creditDetailRouter,
  holdorderDetailRouter,
  holdorderHistoryRouter,
  stoplossHistoryRouter,
  stopprofitHistoryRouter
} from './modules/holdorder'
import {
  closeorderDetail
} from './modules/closeorder'
import {
  memberDetailRouter,
  memberfundDetailRouter
} from './modules/member'
import {
  agentDetailRouter,
  agentfundDetailRouter,
  agentfundSeparateRouter,
  agentfundSeparateDetailRouter
} from './modules/agent'
import {
  operatorDetailRouter
} from './modules/operator'
import {
  roleManagementRoute,
  authorityDetailRoute,
  authorityTemplateRoute
} from './modules/authority'
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
    redirect: '/login'
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
      creditDetailRouter,
      holdorderDetailRouter,
      holdorderHistoryRouter,
      stoplossHistoryRouter,
      stopprofitHistoryRouter,
      closeorderDetail,
      memberDetailRouter,
      memberfundDetailRouter,
      agentDetailRouter,
      agentfundDetailRouter,
      agentfundSeparateRouter,
      agentfundSeparateDetailRouter,
      operatorDetailRouter,
      roleManagementRoute,
      authorityDetailRoute,
      authorityTemplateRoute
    ]
  },
  ]
})

//挂载路由导航守卫
router.beforeEach(function (to, from, next) {
  //在这里可以设置路由拦截
  next();
})
//导出
export default router
