<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="员工名字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getemployee">查询</el-button>
        </el-form-item>
        <!--<el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>-->
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="employee" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
      <!--<el-table-column type="selection" width="55">-->
      <!--</el-table-column>-->
      <!--<el-table-column type="index" width="60">-->
      <!--</el-table-column>-->
      <el-table-column prop="emid" label="员工编号" width="200"  sortable>
      </el-table-column>
      <el-table-column prop="emname" label="员工姓名" width="120" sortable>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120" sortable>
      </el-table-column>
      <el-table-column prop="departId" label="部门编码" width="120" sortable>
      </el-table-column>
      <el-table-column prop="postId" label="职务编码" width="120" sortable>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
      </el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <!--<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="员工部门编码" prop="departId">
          <el-input v-model="editForm.departId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工职务编码" prop="postId">
          <el-input v-model="editForm.postId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="postId">
          <el-input v-model="editForm.marriage" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文化程度" prop="postId">
          <el-input v-model="editForm.level" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工职务编码" prop="postId">
          <el-input v-model="editForm.postId" auto-complete="off"></el-input>
        </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
-->
      <el-form :model="editForm" :rules="editFormRules" ref="editForm" label-width="80px" class="demo-editForm">


        <el-form-item label="婚姻状况" prop="marriage">
          <el-radio-group v-model="editForm.marriage">
            <el-radio label="已婚"></el-radio>
            <el-radio label="未婚"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文化程度" prop="levelId">
          <el-select v-model="editForm.levelId" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.levelId"
              :label="item.education"
              :value="item.levelId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职务">
          <el-select v-model="editForm.postId" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.postId"
              :label="item.postName"
              :value="item.postId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位级别">
          <el-select v-model="editForm.rankId" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.baseSalary"
              :label="item.rankId"
              :value="item.rankId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="现住址" prop="address">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="editForm.departId" placeholder="请选择">
            <el-option
              v-for="item in options4"
              :key="item.departId"
              :label="item.departName"
              :value="item.departId">
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="工作性质" prop="natureWork">
          <el-radio-group v-model="editForm.natureWork">
            <el-radio label="实习"></el-radio>
            <el-radio label="全职"></el-radio>
            <el-radio label="兼职"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="员工状态" prop="condition">
          <el-radio-group v-model="editForm.situation">
            <el-radio label="试用"></el-radio>
            <el-radio label="正式"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>

    <!--新增界面-->
    <!--<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="departName">
          <el-input v-model="addForm.departName" auto-complete="off"></el-input>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>-->
  </section>
</template>

<script>

  import AllService from '../../services/allservice.js'

  var allService = new AllService()

  export default {
    data() {
      return {
        filters: {
          name: ''
        },
        employee: [],
        total: 0,
        page: 1,
        listLoading: false,
        sels: [],//列表选中列

        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editFormRules: {
          departId: [
            {required: true, message: '请输入部门编号', trigger: 'blur'}
          ],
          postId: [
            {required: true, message: '请输入职务编号', trigger: 'blur'}
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'blur' },
          ],
          natureWork: [
            { required: true, message: '请选择工作性质', trigger: 'change' }
          ],
          situation: [
            { required: true, message: '请选择入职状态', trigger: 'change' }
          ],
          rankId: [
            { required: true, message: '请选择职位级别', trigger: 'change' }
          ],
        },
        //编辑界面数据
        editForm: {
          departId: '',
          postId: '',
          marriage:'',
          levelId:'',
          rankId:'',
          address:'',
          natureWork:'',
          situation:''
        },
        options1:[],
        options2:[],
        options3:[],
        options4:[]
        /*addFormVisible: false,//新增界面是否显示
        addLoading: false,
        addFormRules: {
          departName: [
            {required: true, message: '请输入部门名字', trigger: 'blur'}
          ]
        },
        //新增界面数据
        addForm: {
          departId: '',
          departName: '',
        }*/

      }
    },
    methods: {
      //性别显示转换
      /*formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },*/
      handleCurrentChange(val) {
        this.page = val;
        this.getemployee();
      },
      //获取用户列表
      getemployee() {
        let params = {
          page: this.page,
          emname: this.filters.name,
          rankId:"1",
          postId:"1",
          levelId:"1",
          departId:"1"

        };
        this.listLoading = true;
        //NProgress.start();
        if(params.emname==""){
        allService.getAllEmployee(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if (data.status == "false") {
              console.log(data);
              this.$message.error(data);
            } else {
              this.employee = data.data;
              this.total = data.total;
              this.listLoading = false;
            }
          } else {
            this.$alert("查询失败")
          }
        })}
        else{
          allService.getEmployeeVague(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if (data.status == "false") {
                console.log(data);
                this.$message.error(data);
              } else {
                this.employee = data.data;
                this.total = data.total;
                this.listLoading = false;
              }
            } else {
              this.$alert("查询失败")
            }
          })
        }
      },
      //显示编辑界面
      handleEdit: function (index, row) {

        this.editFormVisible = true;

        this.editForm = Object.assign({}, row);

      },
      //显示新增界面
     /* handleAdd: function () {
        this.addFormVisible = true;
        this.addForm = {
          departId:'',
          departName: '',

        };
      },*/
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
              //NProgress.start();
              let params = Object.assign({}, this.editForm);
              console.log(params)
              // para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
              allService.updateEmployee(params, (isOk, data) => {
                this.editLoading = false;
                //NProgress.done();
                this.$message({
                  message: '编辑成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getemployee();
              });
            });
          }
        });
      },
      //新增
      /*addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
              //NProgress.start();
              let params = Object.assign({}, this.addForm);
              allService.addDepart(params,(isok,data) => {
                this.addLoading = false;
                //NProgress.done();
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.$refs['addForm'].resetFields();
                this.addFormVisible = false;
                this.getdepart();
              });
            });
          }
        });
      },*/
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该员工吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { emid: row.emid,postId:row.postId,departId:row.departId,levelId:"1",rankId:"1" };
          allService.deleteEmployee(para,(isok,data) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getemployee();
          });
        }).catch(() => {

        });
      },
      selsChange: function (sels) {
        this.sels = sels;
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
    },
    mounted() {
      this.getAllEducationLevel();
      this.getAllPostName();
      this.getAllRank();
      this.getAllDepartName();
      this.getemployee();
    },
  }


</script>

<style scoped>

</style>
