<template>
  <div id="myapp">
  <!-- header -->
  <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
      <!-- sidebar -->
      <app-sidebar></app-sidebar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// ES6中模块化的语法，导出一个对象
// 导入appheader组件
import AppHeader from './components/AppHeader.vue';
// 导入Appsidebar组件
import AppSidebar from './components/AppSidebar.vue';
export default {
  name: 'app',
  components:{
    AppHeader,
    AppSidebar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
