/**
 * 操作员管理路由
 */
//操作员明细路由
const operatorDetailRouter = {
    path: '/operatorDetail',
    name: 'operatorDetail',
    component: resolve => require(['@/components/views/operator/operatorDetail'], resolve)
}
export {
    operatorDetailRouter
}