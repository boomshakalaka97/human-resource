<template>
  <el-form :model="register" status-icon :rules="rules2" ref="register" label-width="100px" class="demo-ruleForm">
    <h3 class="title">用户注册</h3>
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="register.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="register.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="register.checkPass" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('register')">提交</el-button>
      <el-button @click="resetForm('register')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import AllService from '../../services/allservice.js'
  var allService = new AllService()

  export default {
    data() {
      var checkUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.register.checkPass !== '') {
            this.$refs.register.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkIdentity = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('选择不能为空'));
        }
      };
      return {
        register: {
          username:'',
          pass: '',
          checkPass: '',
          identity: ''
        },
        rules2: {
          username: [
            { validator: checkUsername, trigger: 'blur' },
            { min: 2, max: 13, message: '长度在 2 到 13 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 13, message: '长度在 6 到 13 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          identity: [
            { validator: checkIdentity, trigger: 'change' }
          ]
        }
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid);
            this.regist()
          } else {
            return false;
          }
        });
      },
      regist () {
        var params={
          userName:this.register.username,
          password:this.register.pass,
          identity:this.register.identity
        }
        allService.signUp(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if(data.status==='false'){
              this.$message.error(data.data);
            }
            else {
              this.$message.success("注册成功！")
              this.$router.push('/login')
            }

          } else {
            this.$alert("注册失败！")
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .demo-ruleForm {
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
