<template>
  <el-table
    :data="salarydata"
    style="width: 100%">
    <el-table-column
      prop="emid"
      label="员工编码">
    </el-table-column>
    <el-table-column
      prop="departName"
      label="部门名">
    </el-table-column>
    <el-table-column
    prop="emname"
    label="员工姓名">
  </el-table-column>
    <el-table-column
      prop="late"
      label="迟到次数">
    </el-table-column>
    <el-table-column
      prop="earlyleave"
      label="早退次数">
    </el-table-column>
    <el-table-column
      prop="extrawork"
      label="加班次数">
    </el-table-column>
    <el-table-column
      prop="holiday"
      label="休假次数">
    </el-table-column>
    <el-table-column
      prop="absent"
      label="缺勤次数">
    </el-table-column>
    <el-table-column
      prop="late_salary"
      label="迟到工资">
    </el-table-column>
    <el-table-column
    prop="earlyleave_salary"
    label="最退工资">
  </el-table-column>
    <el-table-column
    prop="extrawork_salary"
    label="加班工资">
  </el-table-column>
    <el-table-column
    prop="holiday_salary"
    label="休假工资">
  </el-table-column>
    <el-table-column
    prop="absent_salary"
    label="缺勤工资">
  </el-table-column>
    <el-table-column
      prop="basesalary"
      label="基本工资">
    </el-table-column>
    <el-table-column
      prop="totalsalary"
      label="总工资">
    </el-table-column>
  </el-table>
</template>

<script>
  import AllService from '../../services/allservice.js'

  var allService = new AllService()
    export default {
      name: "salary_show",
      data() {
        return {
          salarydata: [{}]
        }
      },
      mounted:function(){
        this.fillIn();
      },
      methods: {
        fillIn() {
          var params = {}
          allService.salaryCalculate(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if (data.status == "false") {
                console.log(data);
                this.$message.error(data);
              } else {
                allService.getAllSalary(params, (isOk, data) => {
                  if (isOk) {
                    console.log(data);
                    if (data.status == "false") {
                      console.log(data);
                      this.$message.error(data);
                    } else {

                      this.salarydata = data.data;

                    }
                  } else {
                    this.$alert("查询失败")
                  }
                })
              }
            } else {
              this.$alert("查询失败")
            }
          })

        }
      }
    }
</script>

<style scoped>

</style>
