/**
 * 权限管理路由
 */
//角色管理
const roleManagementRoute = {
    path: '/roleManagement',
    name: 'roleManagement',
    component: resolve => require(['@/components/views/authority/roleManagement'], resolve)
}
//权限一览
const authorityDetailRoute = {
    path: '/authorityDetail',
    name: 'authorityDetail',
    component: resolve => require(['@/components/views/authority/authorityDetail'], resolve)
}
//权限模版
const authorityTemplateRoute = {
    path: '/authorityTemplate',
    name: 'authorityTemplate',
    component: resolve => require(['@/components/views/authority/authorityTemplate'], resolve)
}
export {
    roleManagementRoute,
    authorityDetailRoute,
    authorityTemplateRoute
}