<template>
  <div class="header">
    <el-header>
        <div class="title">通用管理系统</div>
        <div></div>
    </el-header>
   
  </div>
</template>

<script>
// import { getToken }from '/utils/setToken.js'
export default {
    data(){
        return {
                name:''
        }
    },
    // created(){
    //     this.name=getToken('username')
    // }
}
</script>

<style lang="less">
.title{
    text-align: center;
    width:200px;
    font-size: 24px;
}
.haeder{
   
}
.el-header{
        background: #409eff;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;


    }
</style>