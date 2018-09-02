<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="txtgender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
          </div>
         
          
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    data(){
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    methods: {
        handleAdd(){
            // axios
            this.$http
            .post('heroes',this.formData)
            .then((response)=>{
                if(response.status ===201){
                    alert('添加成功')
                    this.$router.push('/heroes')
                }else {
                    alert('添加失败')
                }
            })
            .catch((err)=>{
                console.log(err);
                
            })
        }
    }
}
</script>

<style>

</style>
