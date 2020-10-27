import http from './http'

let resquest = "http://localhost:3000"

// get请求
export function getNavAPI(params) {
    return http.get(`${resquest}/app/nav`, params)
}
// post请求
export function loginAPI(params) {
    return http.post(`${resquest}/app/user`, params)
}

