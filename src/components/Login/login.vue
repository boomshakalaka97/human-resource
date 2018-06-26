<template>
  <el-form :model="form" :rules="rules" ref="form" label-position="left" label-width="0px" class="card-box">
    <h3 class="title">用户登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="form.username" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;" native-type="submit" @click.native.prevent="onSubmit">
        登录
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="text" @click="register" style="float: right">没有账户？去注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import AllService from '../../services/allservice.js'
  import  '../../vuex/store.js'

  var allService = new AllService()
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            { min: 2, max: 13, message: '长度在 2 到 13 个字符', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            { min: 5, max: 13, message: '长度在 6 到 13 个字符', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.login()
          }
        })
      },
      login () {
        var params={
          userName:this.form.username,
          password:this.form.password
        }

        allService.signIn(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if(data.status == "false"){
              console.log(data);
              this.$message.error(data);
            }else {
                this.$store.dispatch('loginAction');
                this.$store.dispatch('SETUSERNAME',data.data.userName);
                this.$store.dispatch('SETIDENTITY',data.data.authority);

                this.$router.push('/left');

              this.$message.success("登录成功！");
            }
          } else {
            this.$alert("登录失败！")
          }
        })
      },
      register(){

        this.$router.push("/register");
      }


    }
  }
</script>

<style scoped>
  .card-box {
    padding: 35px 35px 15px 35px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 120px auto;
    width: 350px;
    border: 2px solid #8492A6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
