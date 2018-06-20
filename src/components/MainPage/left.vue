<template>
<el-container style="height: 600px; border: 1px solid #eee">

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>员工管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/basic">员工信息</el-menu-item>
          <el-menu-item index="1-2" route="/input">信息录入</el-menu-item>
          <el-menu-item index="1-3">修改信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>部门管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">部门信息</el-menu-item>
          <el-menu-item index="2-2">薪酬管理</el-menu-item>
          <el-menu-item index="2-3">人员统计</el-menu-item>
          <el-menu-item index="2-3">员工考勤</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>报表下载</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">人事报表</el-menu-item>
          <el-menu-item index="3-2">薪酬报表</el-menu-item>
          <el-menu-item index="3-3">考勤报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>


  </el-container>
</template>
<script>
    export default {
      data() {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金item沙江路 1518 弄'
        };
        return {
          tableData: Array(20).fill(item)
        }
      }
    };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
