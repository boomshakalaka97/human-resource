<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="部门名字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getdepart">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="depart" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
      <!--<el-table-column type="selection" width="55">-->
      <!--</el-table-column>-->
      <!--<el-table-column type="index" width="60">-->
      <!--</el-table-column>-->
      <el-table-column prop="departId" label="编号" width="200"  sortable>
      </el-table-column>
      <el-table-column prop="departName" label="部门" width="120" sortable>
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
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="部门" prop="deparName">
          <el-input v-model="editForm.departName" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>

    </el-dialog>

    <!--新增界面-->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="departName">
          <el-input v-model="addForm.departName" auto-complete="off"></el-input>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
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
        depart: [],
        total: 0,
        page: 1,
        listLoading: false,
        sels: [],//列表选中列

        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editFormRules: {
          departName: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
        //编辑界面数据
        editForm: {
          departId: '',
          departName: '',

        },

        addFormVisible: false,//新增界面是否显示
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
        }

      }
    },
    methods: {
      //性别显示转换
      /*formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },*/
      handleCurrentChange(val) {
        this.page = val;
        this.getdepart();
      },
      //获取用户列表
      getdepart() {
        let params = {
          page: this.page,
          departName: this.filters.name
        };
        this.listLoading = true;
        //NProgress.start();
        if(params.departName==""){
        allService.getAllDepartName(params, (isOk, data) => {
          if (isOk) {
            console.log(data);
            if (data.status == "false") {
              console.log(data);
              this.$message.error(data);
            } else {
              this.depart = data.data;
              this.total = data.total;
              this.listLoading = false;
            }
          } else {
            this.$alert("查询失败")
          }
        })}
        else{
          allService.getDepartVague(params, (isOk, data) => {
            if (isOk) {
              console.log(data);
              if (data.status == "false") {
                console.log(data);
                this.$message.error(data);
              } else {
                this.depart = data.data;
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
      handleAdd: function () {
        this.addFormVisible = true;
        this.addForm = {
          departId:'',
          departName: '',

        };
      },
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
              //NProgress.start();
              let params = Object.assign({}, this.editForm);
              // para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
              allService.updateDepart(params, (isOk, data) => {
                this.editLoading = false;
                //NProgress.done();
                this.$message({
                  message: '编辑成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getdepart();
              });
            });
          }
        });
      },
      //新增
      addSubmit: function () {
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
      },
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该部门吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { departId: row.departId };
          allService.deleteDepart(para,(isok,data) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getdepart();
          });
        }).catch(() => {

        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
    },
    mounted() {
      this.getdepart();
    },
  }


</script>

<style scoped>

</style>
