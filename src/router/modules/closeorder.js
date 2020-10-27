/**
 * 平仓管理路由
 */
//平仓明细
const closeorderDetail = {
    path: '/closeorderDetail',
    name: 'closeorderDetail',
    component: resolve => require(['@/components/views/closeorder/closeorderDetail'], resolve)
}

export {
    closeorderDetail,
}