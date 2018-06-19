<template>
  <div style="width:500px; " >
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="ruleForm.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="民族" prop="nation">
      <el-input v-model="ruleForm.nation"></el-input>
    </el-form-item>
    <el-form-item label="出生年月" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
      <el-form-item label="婚姻状况" prop="marry">
        <el-radio-group v-model="ruleForm.marry">
          <el-radio label="已婚"></el-radio>
          <el-radio label="未婚"></el-radio>
        </el-radio-group>
      </el-form-item>
    <el-form-item label="文化程度">
      <el-select v-model="ruleForm.culture" placeholder="文化程度">
        <el-option label="高中" value="high"></el-option>
        <el-option label="本科" value="college"></el-option>
          <el-option label="研究生" value="graduate"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职务">
      <el-select v-model="ruleForm.post" placeholder="职务">
        <el-option label="总监" value="post1"></el-option>
        <el-option label="经理" value="post2"></el-option>
        <el-option label="主管" value="post3"></el-option>
        <el-option label="助理" value="post4"></el-option>
        <el-option label="工程师" value="post5"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职位级别">
      <el-select v-model="ruleForm.rank" placeholder="级别">
        <el-option label="级别1" value="rank1"></el-option>
        <el-option label="级别2" value="rank2"></el-option>
        <el-option label="级别3" value="rank3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="籍贯" prop="birthplace">
      <el-input v-model="ruleForm.birthplace"></el-input>
    </el-form-item>
    <el-form-item label="身份证号码" prop="id_num">
      <el-input v-model="ruleForm.id_num"></el-input>
    </el-form-item>
    <el-form-item label="毕业学校" prop="school">
      <el-input v-model="ruleForm.school"></el-input>
    </el-form-item>
    <el-form-item label="现住址" prop="address">
      <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item label="入职时间" required>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="所属部门">
      <el-select v-model="ruleForm.depart" placeholder="部门">
        <el-option label="技术部" value="depart1"></el-option>
        <el-option label="推广部" value="depart2"></el-option>
        <el-option label="客服部" value="depart3"></el-option>
        <el-option label="财务部" value="depart3"></el-option>
        <el-option label="行政部" value="depart3"></el-option>
      </el-select>
    </el-form-item>


    <el-form-item label="入职状态" prop="resource">
      <el-radio-group v-model="ruleForm.conditon">
        <el-radio label="实习"></el-radio>
        <el-radio label="全职"></el-radio>
        <el-radio label="兼职"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">录入</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
  </template>
  <script>
    import AllService from '../../services/allservice.js'

    var allService = new AllService()
    export default {
      data() {
        return {
          ruleForm: {
            name: '',
            sex: '',
            nation: '',
            date1: '',
            marry: '',
            culture: '',
            post: '',
            rank: '',
            birthplace: '',
            id_num: '',
            school: '',
            address: '',
            date2: '',
            depart: '',
            condition: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            sex: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
            nation: [
              { required: true, message: '请输入民族', trigger: 'blur' },
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            post: [
              { required: true, message: '请选择职务', trigger: 'blur' }
            ],
            rank: [
              { required: true, message: '请选择职位级别', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],

            birthplace: [
              { required: true, message: '请输入籍贯', trigger: 'blur' },
            ],
            id_num: [
              { required: true, message: '请输入身份证号码', trigger: 'blur' },
            ],
            address: [
              { required: true, message: '请输入地址', trigger: 'blur' },
            ],
            condition: [
              { required: true, message: '请选择入职状态', trigger: 'change' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.input()
            }
          })
            // if (valid) {
            //   alert('submit!');
            // } else {
            //   console.log('error submit!!');
            //   return false;
            // }
          // });
        },
        input () {
          var params={
            name:this.ruleForm.name,
            sex:this.ruleForm.sex,
            nation:this.ruleForm.nation,
            date1:this.ruleForm.date1,
            marry:this.ruleForm.marry,
            culture:this.ruleForm.culture,
            post:this.ruleForm.post,
            rank:this.ruleForm.rank,
            birthplace:this.ruleForm.birthplace,
            id_num:this.ruleForm.id_num,
            school:this.ruleForm.school,
            address:this.ruleForm.address,
            date2:this.ruleForm.date2,
            depart:this.ruleForm.depart,
            condition:this.ruleForm.condition,
          }

          allService.addMessage(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {

                this.$message.success("录入成功！");
              }
            } else {
              this.$alert("录入失败！")
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
  </script>
