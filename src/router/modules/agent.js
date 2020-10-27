/**
 * 代理商管理路由
 */
//代理商明细
const agentDetailRouter = {
    path: '/agentDetail',
    name: 'agentDetail',
    component: resolve => require(['@/components/views/agent/agentDetail'], resolve)
}
//代理商资金明细
const agentfundDetailRouter = {
    path: '/agentfundDetail',
    name: 'agentfundDetail',
    component: resolve => require(['@/components/views/agent/agentfundDetail'], resolve)
}
//代理商分润比率设置
const agentfundSeparateRouter = {
    path: '/agentfundSeparate',
    name: 'agentfundSeparate',
    component: resolve => require(['@/components/views/agent/agentfundSeparate'], resolve)
}
//代理商分润明细
const agentfundSeparateDetailRouter = {
    path: '/agentfundSeparateDetail',
    name: 'agentfundSeparateDetail',
    component: resolve => require(['@/components/views/agent/agentfundSeparateDetail'], resolve)
}
export {
    agentDetailRouter,
    agentfundDetailRouter,
    agentfundSeparateRouter,
    agentfundSeparateDetailRouter
}