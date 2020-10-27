/**
 * 持仓管理路由
 */
//信用金明细
const creditDetailRouter = {
    path: '/creditDetail',
    name: 'creditDetail',
    component: resolve => require(['@/components/views/holdorder/creditDetail'], resolve)
}
//持仓明细
const holdorderDetailRouter = {
    path: '/holdorderDetail',
    name: 'holdorderDetail',
    component: resolve => require(['@/components/views/holdorder/holdorderDetail'], resolve)
}
//持仓历史
const holdorderHistoryRouter = {
    path: '/holdorderHistory',
    name: 'holdorderHistory',
    component: resolve => require(['@/components/views/holdorder/holdorderHistory'], resolve)
}
//止损明细
const stoplossHistoryRouter = {
    path: '/stoplossDetail',
    name: 'stoplossDetail',
    component: resolve => require(['@/components/views/holdorder/stoplossDetail'], resolve)
}
//止盈明细
const stopprofitHistoryRouter = {
    path: '/stopprofitDetail',
    name: 'stopprofitDetail',
    component: resolve => require(['@/components/views/holdorder/stopprofitDetail'], resolve)
}
export {
    creditDetailRouter,
    holdorderDetailRouter,
    holdorderHistoryRouter,
    stoplossHistoryRouter,
    stopprofitHistoryRouter
}