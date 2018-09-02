<template>
    <div>
        <!-- <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="txtgender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
          </div>
         
          
          <button type="submit" class="btn btn-success" >Submit</button>
        </form> -->
       <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="txtgender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
  props:['id'],
  data(){
    return{
      formData:{
        name:'',
        gender:''
      }
    }
  },
  mounted() {
    this.localData()
  },
  methods: {
    localData(){
      // axios
      this.$http
      .get(`heroes/${this.id}`)
      .then((response)=>{
        this.formData = response.data
        console.log(this.formData);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    },
    handleEdit(){
      // axios
      this.$http
      .put(`heroes/${this.id}`,this.formData)
      .then((response)=>{
        if(response.status===200){
          alert('修改成功')
          this.$router.push('/heroes');
        }else {
          alert('修改失败');
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
