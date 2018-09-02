<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
          <a class="btn btn-success" href="add.html">Add</a>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                  <td>{{index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <a href="javascript:;" @click.prevent="handleDlete(item.id)">delete</a>
                  </td>
                </tr>
                <tr>
                  <td v-if="list.lenght==0" colspan="4">暂无数据</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      //英雄列表
      list:[]
    }
  },
    mounted(){
      this.loadData();
    },
    methods:{
      loadData(){
        axios
        .get('http://localhost:3000/heroes/')
        .then((response)=>{
          if(response.status===200){
            this.list = response.data
          }
        })
        .catch((err)=>{
          console.log(err);
          
        })
      },
      handleDlete(id){
        if(!confirm('确定删 ？')){
          return;
        }
        axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then((response)=>{
          if(response.status == 200){
            alert('删除成功');
            this.loadData()
          }
        })
        .catch((err)=>{
          console.log(err);
          
        })
      }
    }
};
</script>

<style>

</style>
