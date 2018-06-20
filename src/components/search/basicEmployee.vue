<template>
<div>
  <el-row :gutter="20" >
    <el-col :span="20">
      <el-tabs v-model="activeName0" stretch="true" @tab-click="handleClick">
      <el-tab-pane label="在职"name="first">
        <el-table
          :data="tableData0"
          style="width: 100%">
          <el-table-column
            prop="emid"
            label="员工编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="emname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="departId"
            label="部门编码">
          </el-table-column>
          <el-table-column prop="postId" label="职务编码">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle>
            </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="全职" name="second">
        <el-table
          :data="tableData1"
          style="width: 100%">
          <el-table-column
            prop="emid"
            label="员工编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="emname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="departId"
            label="部门编码">
          </el-table-column>
          <el-table-column
            prop="postId"
            label="职务编码">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" circle>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="实习" name="third">
        <el-table
          :data="tableData2"
          style="width: 100%">
          <el-table-column
            prop="emid"
            label="员工编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="emname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="departId"
            label="部门编码">
          </el-table-column>
          <el-table-column
            prop="postId"
            label="职务编码">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" circle>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="兼职" name="fourth">
        <el-table
          :data="tableData3"
          style="width: 100%">
          <el-table-column
            prop="emid"
            label="员工编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="emname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="departId"
            label="工作部门">
          </el-table-column>
          <el-table-column
            prop="postId"
            label="职务">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" circle>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!--</el-tabs>
    </el-col>
    <el-col :span="8">
      <el-tabs v-model="activeName0" @tab-click="handleClick">-->
          <el-tab-pane label="试用期"name="fifth">
            <el-table
              :data="tableData4"
              style="width: 100%">
              <el-table-column
                prop="emid"
                label="员工编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="emname"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="departId"
                label="部门编码">
              </el-table-column>
              <el-table-column
                prop="postId"
                label="职务编码">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit" circle>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="正式" name="seventh">
            <el-table
              :data="tableData5"
              style="width: 100%">
              <el-table-column
                prop="emid"
                label="员工编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="emname"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="departId"
                label="部门编码">
              </el-table-column>
              <el-table-column
                prop="postId"
                label="职务编码">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit" circle>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
    </el-col>
  </el-row>
</div>
</template>

<script>
  import AllService from '@/services/allservice'
  export default {
      data() {
        return {
          service: new AllService(),
          activeName0: 'FIRST',
          tableData0: [{}],
          tableData1: [{}],
          tableData2: [{}],
          tableData3: [{}],
          tableData4: [{}],
          tableData5: [{}]
        };

      },
      methods: {
        //按钮跳转+参数
       /*/ handleEdit:function(){
          var emid=this.
        },*/
        handleClick(tab, event) {//想获得table中所选的label值，并调用令一个函数返回查询结果
          console.log(tab, event);
          this.fillIn()
        },
        fillIn(){
          var params0={natureWork:"全职"}
          var params1={natureWork:"实习"}
          var params2={natureWork:"兼职"}
          var params3={situation:"试用期"}
          var params4={situation:"正式"}
          var params={}
          this.service.getAllEmployee(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {

                this.tableData0=data.data;

              }
            } else {
              this.$alert("查询失败")
            }
          }),
            this.service.getEmployeeByNature_work(params0, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {
                this.tableData1=data.data;
                // this.$message.success("登录成功！");
              }
            } else {
              this.$alert("查询失败")
            }
          }),
            this.service.getEmployeeByNature_work(params1, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {
                this.tableData2=data.data;
                // this.$message.success("登录成功！");
              }
            } else {
              this.$alert("查询失败")
            }
          }),
            this.service.getEmployeeByNature_work(params2, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {
                this.tableData3=data.data;
                // this.$message.success("登录成功！");
              }
            } else {
              this.$alert("查询失败")
            }
          }),
           this.service.getEmployeeBySituation(params3, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {
                this.tableData4=data.data;
                // this.$message.success("登录成功！");
              }
            } else {
              this.$alert("查询失败")
            }
          }),
            this.service.getEmployeeBySituation(params4, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if(data.status == "false"){
                console.log(data);
                this.$message.error(data);
              }else {
                this.tableData5=data.data;
                // this.$message.success("登录成功！");
              }
            } else {
              this.$alert("查询失败")
            }
          })
        }
      }
    };
</script>

<style scoped>

</style>
