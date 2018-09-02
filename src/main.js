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
import router from './routers'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
