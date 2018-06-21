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
        <el-form-item prop="birth">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth" style="width: 100%;"></el-date-picker>
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
      <el-select v-model="ruleForm.level" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.levelId"
          :label="item.education"
          :value="item.levelId">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职务">
      <el-select v-model="ruleForm.post" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.postId"
          :label="item.postName"
          :value="item.postId">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职位级别">
      <el-select v-model="ruleForm.rank" placeholder="请选择">
        <el-option
          v-for="item in options3"
          :key="item.baseSalary"
          :label="item.rankId"
          :value="item.rankId">
        </el-option>
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
      <el-select v-model="ruleForm.depart" placeholder="请选择">
        <el-option
          v-for="item in options4"
          :key="item.departId"
          :label="item.departName"
          :value="item.departId">
        </el-option>
      </el-select>
    </el-form-item>


    <el-form-item label="工作性质" prop="nature_work">
      <el-radio-group v-model="ruleForm.nature_work">
        <el-radio label="实习"></el-radio>
        <el-radio label="全职"></el-radio>
        <el-radio label="兼职"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="员工状态" prop="condition">
      <el-radio-group v-model="ruleForm.condition">
        <el-radio label="试用"></el-radio>
        <el-radio label="正式"></el-radio>
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
            identity: '',
            name: '',
            sex: '',
            nation: '',
            birth: '',
            marry: '',
            level: '',
            post: '',
            rank: '',
            birthplace: '',
            id_num: '',
            school: '',
            address: '',
            date2: '',
            depart: '',
            nature_work:'',
            condition: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
            ],
            sex: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
            nation: [
              { required: true, message: '请输入民族', trigger: 'blur' },
            ],
            birth: [
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
            nature_work: [
              { required: true, message: '请选择工作性质', trigger: 'change' }
            ],
            condition: [
              { required: true, message: '请选择入职状态', trigger: 'change' }
            ],
          },
          options1:[],
          options2:[],
          options3:[],
          options4:[]
        };
      },
      mounted:function(){
        this.getAllEducationLevel();
        this.getAllPostName();
        this.getAllRank();
        this.getAllDepartName();
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              //this.getAllPostName()
             // this.getAllRankId()
              this.input()

            }
          })
        },
        getAllEducationLevel(){
            var params={}
            allService.getAllEducationLevel(params, (isOk, data) => {
              if (isOk) {
                console.log(data);
                if(data.status == "false"){
                  console.log(data);
                  this.$message.error(data);
                }else {
                  this.options1=data.data;
                }
              } else {
                this.$alert("读取失败！")
              }
            })
        },
        getAllPostName(){
          var params={}
          allService.getAllPostName(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {

                this.options2=data.data;
              }
            } else {
              this.$alert("读取失败！")
            }
          })
        },
        getAllRank(){
            var params={}
            allService.getAllRank(params, (isOk, data) => {
              if (isOk) {
                console.log(data);
                if(data.status == "false"){
                  console.log(data);
                  this.$message.error(data);
                }else {
                  this.options3=data.data;
                }
              } else {
                this.$alert("读取失败！")
              }
            })
        },
        getAllDepartName(){
          var params={}
          allService.getAllDepartName(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {

                this.options4=data.data;
              }
            } else {
              this.$alert("读取失败！")
            }
          })
        },
        input () {
          var params={
            emid:this.ruleForm.identity,
            emname:this.ruleForm.name,
            sex:this.ruleForm.sex,
            nation:this.ruleForm.nation,
            birth:this.ruleForm.birth,
            marriage:this.ruleForm.marry,
            levelId:this.ruleForm.level,
            postId:this.ruleForm.post,
            rankId:this.ruleForm.rank,
            birthplace:this.ruleForm.birthplace,
            idnum:this.ruleForm.id_num,
            school:this.ruleForm.school,
            address:this.ruleForm.address,
            departId:this.ruleForm.depart,
            datecome:this.ruleForm.date2,
            natureWork:this.ruleForm.nature_work,
            situation:this.ruleForm.condition,
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
