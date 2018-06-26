<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <!--<el-tab-pane label="添加部门">
      <div style="width:500px; " >
        <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="200px" class="demo-ruleForm">
          <el-form-item label="部门" prop="departName">
            <el-input v-model="ruleForm1.departName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitdepart('ruleForm1')">添加</el-button>
            <el-button @click="resetForm('ruleForm1')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      </el-tab-pane>-->
    <el-tab-pane label="薪酬设置">
      <div style="width:500px; " >
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="200px" class="demo-ruleForm">
        <el-form-item label="加班/小时 +" prop="extrawork">
          <el-input v-model.number="ruleForm2.extrawork"></el-input>
        </el-form-item>
        <el-form-item label="迟到/小时 -" prop="late">
          <el-input v-model.number="ruleForm2.late"></el-input>
        </el-form-item>
        <el-form-item label="早退/小时 -" prop="earlyleave">
          <el-input v-model.number="ruleForm2.earlyleave"></el-input>
        </el-form-item>
        <el-form-item label="假期/天 -" prop="holiday">
          <el-input v-model.number="ruleForm2.holiday"></el-input>
        </el-form-item>
        <el-form-item label="旷工/天 -" prop="absent">
          <el-input v-model.number="ruleForm2.absent"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitwage('ruleForm2')">设置</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    </el-tab-pane>
    <el-tab-pane label="基本工资设置">
     <div style="width:500px; " >
       <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="300px" class="demo-ruleForm">
         <el-form-item label="工资级别">
         <el-select v-model.number="ruleForm3.rankId"
                    placeholder="请选择或输入工资级别"
                    filterable
                    allow-create
                    size="medium">
           <el-option
             v-for="item in options1"
             :key="item.rankId"
             :label="item.rankId"
             :value="item.rankId">
           </el-option>
         </el-select>
       </el-form-item>
         <el-form-item label="工资" prop="basesalary">
           <el-input v-model.number="ruleForm3.basesalary"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="submitsalary('ruleForm3')">设置</el-button>
           <el-button @click="resetForm('ruleForm3')">重置</el-button>
         </el-form-item>
       </el-form>
    </div>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  import AllService from '../../services/allservice.js'

  var allService = new AllService()
  export default {
    data() {
      return {
        /*ruleForm1: {departId: '',departName: ''},*/
        ruleForm2:{
          extrawork: '',
          earlyleave: '',
          late: '',
          rulesid: '',
          holiday: '',
          absent: ''
        },
          ruleForm3:{
          rankId: '',
          basesalary: ''
        },
        options1:[],
        /*rules1: {
          departName: [
            { required: true, message: '请输入部门名字', trigger: 'blur' },
          ]},*/
        rules2:{
          extrawork: [
            { required: true, message: '请输入加班费', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ],
          late: [
            { required: true, message: '请输入扣除的工资', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ],
          holiday : [
            { required: true, message: '请输入扣除的工资', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ],
          absent : [
            { required: true, message: '请输入扣除的工资', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ],
          earlyleave : [
            { required: true, message: '请输入扣除的工资', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ]},
        rules3:{
          rankId : [
            { required: true, message: '请输入工资级别', trigger: 'blur' },
            {  type:'number',message: '必须为数字'}
          ],
          basesalary : [
            { required: true, message: '请输入基本工资', trigger: 'blur' },
            { type: 'number', message: '必须为数字'}
          ]
        }
      };
    },
    mounted:function(){
      this.getAllRank();
    },
    methods: {
      getAllRank(){
        var params={}
        allService.getAllRank(params, (isOk, data) => {
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
      /*submitdepart(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.input()
          }
        })
      },*/
      submitwage(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.setwage()
          }
        })
      },
      submitsalary(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.setsalary()
          }
        })
      },
      /*input () {
        var params={
          departId:this.ruleForm1.departId,
          departName:this.ruleForm1.departName,
        }

        allService.addDepart(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if(data.status == "false"){
              console.log(data);
              this.$message.error(data);
            }else {
              this.$message.success("添加成功！");
            }
          } else {
            this.$alert("添加失败！")
          }
        })
      },*/
      setwage () {
        var params={
          extrawork:this.ruleForm2.extrawork,
          late:-this.ruleForm2.late,
          rulesid:'1',
          earlyleave:-this.ruleForm2.earlyleave,
          holiday:-this.ruleForm2.holiday,
          absent:-this.ruleForm2.absent,
        }
        //薪酬规则
        allService.setWage(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if(data.status == "false"){
              console.log(data);
              this.$message.error(data);
            }else {
              this.$message.success("设置成功！");
            }
          } else {
            this.$alert("设置失败！")
          }
        })
      },
      //基本工资
      setsalary () {
        var params={
          rankId:this.ruleForm3.rankId,
          basesalary:this.ruleForm3.basesalary,
        }
        if(params.rankId!="") {
          allService.setSalary(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if (data.status == "false") {
                console.log(data);
                this.$message.error(data);
              } else {
                this.$message.success("设置成功！");
              }
            } else {
              this.$alert("设置失败！")
            }
          })
        }
        else{
          this.$alert("工资级别不能为空")
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>
