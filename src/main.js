//基于webpack的开发，是基于模块化的开发
// node.js的模块是遵守CommonJS规范
// var Vue = require('vue')

// ES6模块化的语法 
import Vue from 'vue';

import App from './App.vue';
//导入全局样式
// 导入bootstrao样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

//导入路由模块
import router from './routers';

// import axios from 'axios';
//给vue的原型增加axios成员
// axios.defaults.baseURL = 'http://localhost:3000/';
// Vue.prototype.$http = axios;

import MyHttp from './plugins/MyHttp.js';
//注册事件
//调用插件对象MyHttp.install方法
Vue.use(MyHttp);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
