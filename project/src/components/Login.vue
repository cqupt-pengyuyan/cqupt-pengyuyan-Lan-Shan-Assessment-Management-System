<template>
  <div class="login">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>通用后台管理系统</span>
    
  </div>
  <el-form label-width="80px" :model="form" ref="form" :rules="rules">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login('form')">登录</el-button>
  </el-form-item>
</el-form>
</el-card>
  
  </div>
</template>

<script>

import { nameRule,passRule } from '../utils/validate.js'
import { setToken } from '../utils/setToken.js'

import { login } from '../api/api.js'
export default {
data(){
 
    
    return{
        form:{
            username:'',
            password:''
        },
        rules:{
            username:[{validator:nameRule,trigger:'blur'}],
            password:[{validator:passRule,trigger:'blur'}]
        }
    };
},
methods: {
  login(form) {
    this.$refs[form].validate((valid) => {
      if (valid) {
        login(this.form).then((res) => {
          if (res.data.status === 200) {
            setToken('username', res.data.username);
            setToken('token', res.data.token);
            this.$message({ message: res.data.message, type: 'success' });
            this.$router.push('/home'); // Redirect to home page
          }
        });
      } else {
        console.error(this.form);
      }
    });
  }
}
}
// methods:{
//   login(form) {
//     this.$refs[form].validate((valid) => {
//       if (valid) {
//         login(this.form).then((res) => {
//           if (res.data.status === 200) {
//             setToken('username', res.data.username);
//             setToken('token', res.data.token);
//             this.$message({ message: res.data.message, type: 'success' });
//             this.$router.push('/home'); // Redirect to home page
//           }
//         });
//       } else {
//         console.error(this.form);
//       }
//     });
//   }
// // login(form){
// //     this.$refs[form].validate((valid) =>{
    
// //         if (valid) {
// //       console.log(this.form)
//     //  service.post('/login',this.form)
//     //   .then(res=>{
//     //     if(res.data.ststus === 200){
//     //         setToken('username',res.data.username)
//     //         setToken('token',res.data.token)
//     //         this.$message({message:res.data.message,type:'success'})
//     //         this.$router.push('/home')
//     //     }
//     //     console.log(res)
//     //   })
// //     login(this.form).then(res=>{
      
// //                  if(res.data.ststus === 200){
// //             setToken('username',res.data.username)
// //             setToken('token',res.data.token)
// //             this.$message({message:res.data.message,type:'success'})
// //             this.$router.push('/home')
        
// //         }
// //     })
// //         }else{
// //             console.error(this.form)
// //         }
// //     })
// // }
// // }
// }


</script>

<style>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    
  background-image: url('preview.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9; /* 调整透明度，范围为0到1 */




}
.el-card{
    background: #65768557;
}
.box-card{
     width: 450px;
     margin: 200px auto;   
     color:#fff;
    }
    .el-button{
width: 100%;
margin:auto; 
    }
    .el-card__header{
font-size: 34px;
text-align: center;
font-weight: bold;
    }
</style>