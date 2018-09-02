import VueRouter from 'vue-router';
import Vue from 'vue';
//导入路由组件
import HeroList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import HeroAdd from '../views/heroes/Add.vue';
// Vue.use()注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
  //设置精确的激活类样式
  linkExactActiveClass:'active',
  routes:[
    {path:'/',redirect:'/heroes'},
    {path:'/heroes',component:HeroList},
    {path:'/equips',component:EquipsList},
    {path:'/weapons',component:WeaponsList},
    {path:'/heroes/add',component:HeroAdd}
  ]
});

export default router;