import http from './http'
import qs from 'qs';

// 登录
export function loginAPI(params) {
    return http.post(`/auth/access-token`, qs.stringify(params))
}
//订单分页查询
export function orderAPI(params) {
    return http.get(`/order`, params)
}
//订单排产查询
export function order_item_api(params) {
    return http.get(`/order-item`, params)
}
//生产任务单查询
export function order_task_api(params) {
    return http.get(`/order-task`, params)
}
//产线状态查询
export function event_api(params) {
    return http.get(`/event`, params)
}
//产线状态查询
export function operator_api(params) {
    return http.get(`/operator`, params)
}
//设备(产线)配置查询
export function device_api(params) {
    return http.get(`/device`, params)
}