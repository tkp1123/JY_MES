// 导入axios实例
import request from './request'
const http = {
    /**
    * methods: 请求方法
    * @param url 请求地址 
    * @param params 请求参数
    **/
    get(url, params) {
        const config = {
            method: 'get',
            url: url
        }
        if (params) config.params = params
        config.headers = {
            'Content-Type': 'application/json; charset=utf-8'
        }
        return request(config)
    },
    post(url, params) {
        const config = {
            method: 'post',
            url: url
        }
        if (params) config.data = params
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
        return request(config)
    },
    put(url, params) {
        const config = {
            method: 'PUT',
            url: url
        }
        if (params) {
            config.data = params
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            }
        }
        return request(config)
    },
}
//导出
export default http