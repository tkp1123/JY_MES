// 导入axios
import axios from 'axios'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';
import { Loading } from 'element-ui'
import router from '@/router'
import store from '@/store'
import settings from './setting';
const baseUrl = process.env.NODE_ENV === 'development' ? settings.baseUrl.dev : settings.baseUrl.pro;
const service = axios.create({
    baseURL: baseUrl,
    // 超时时间 单位是ms，这里设置了10s的超时时间
    timeout: 10 * 1000
})
// loading框设置局部刷新，且所有请求完成后关闭loading框
let loading;
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "Loading...",
        target: document.querySelector('.loading-area')//设置加载动画区域
    });
}
function endLoading() {
    loading.close();
}
// 2.请求拦截器
service.interceptors.request.use(config => {
    let token = 'Bearer ' + store.state.user.token
    if (token) {
        config.headers.Authorization = token;
    }
    startLoading();
    return config
}, error => {
    endLoading()
    Promise.reject(error)
})
// 3.响应拦截器
service.interceptors.response.use(response => {
    if (response.data.code == 403) {
        Message({
            message: response.data.msg,
            type: 'error',
            duration: 1500
        })
    }
    endLoading()
    return response.data
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    console.log(error.response)
    if (error && error.response) {
        if (error.response.status == 401) {
            //这里还需要清除token
            router.push({ name: 'login' })
        }
        Message({
            message: error.response.data,
            type: 'error',
            duration: 1500
        })
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请稍后重试')
        }
    }
    endLoading()
    return Promise.resolve(error)
})

//4.导入文件
export default service