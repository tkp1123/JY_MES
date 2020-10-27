/**
 * 会员管理路由
 */
//会员明细路由
const memberDetailRouter = {
    path: '/memberDetail',
    name: 'memberDetail',
    component: resolve => require(['@/components/views/member/memberDetail'], resolve)
}
//会员资金明细路由
const memberfundDetailRouter = {
    path: '/memberfundDetail',
    name: 'memberfundDetail',
    component: resolve => require(['@/components/views/member/memberfundDetail'], resolve)
}
export {
    memberDetailRouter,
    memberfundDetailRouter
}