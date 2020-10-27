// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/styles/index.scss'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import { Message } from 'element-ui'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.config.$http = axios
Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
