// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   //路由
import iView from 'iview'    //ui框架
import 'iview/dist/styles/iview.css'    // 使用 ui框架CSS
// import data from './mock';
import axios from "axios";

import http from './func';

Vue.config.productionTip = false

//空对象
Vue.use(iView);

axios.defaults.timeout = 1000 * 15
axios.defaults.headers['Content-Type'] = 'application/json'

//全局函数挂载于window
window.http = http

new Vue({
  el: '#app',
  // data,
  router,
  template: '<App/>',
  components: { App },
  data: {
    Bus: new Vue()
  }
})
