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

