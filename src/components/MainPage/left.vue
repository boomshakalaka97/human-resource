<template>
 <el-container style="top:0px;height: 500px; border: 1px solid #eee;">
   <!--<el-container>-->
   <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>员工管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/basicemployee">员工信息</el-menu-item>
          <el-menu-item index="1-2" route="/input">信息录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>部门管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/basicdepart">部门信息</el-menu-item>
          <el-menu-item index="2-2" route="/inputattendance">员工考勤</el-menu-item>
          <el-menu-item index="2-3" route="/salary_show">薪酬管理</el-menu-item>
          <el-menu-item index="2-3" route="/inputdepart">基本设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>报表下载</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" route="/person">人事报表</el-menu-item>
          <el-menu-item index="3-2">薪酬报表</el-menu-item>
          <el-menu-item index="3-3">考勤报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
   <el-container>
     <el-header style="text-align: right; font-size: 12px">
       <el-dropdown @command="handleCommand">
         <span class="el-dropdown-link" ><!-- 如何显示用户名-->
         <i class="el-icon--right el-icon-arrow-down " style="margin-right: 15px">
         </i>
         </span>
         <el-dropdown-menu slot="dropdown">
           <el-dropdown-item command="a">修改密码</el-dropdown-item>
           <el-dropdown-item command="b">退出登录</el-dropdown-item>
         </el-dropdown-menu>
       </el-dropdown>
     </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
 </el-container>
  </el-container>
  <!--</el-container>-->

</template>
<script>
    export default {
      data() {
        return{

        }
      },
      methods: {
        handleCommand(command) {
          if(command=='a'){
            this.$router.push('/changePassword')
          }
          if(command=='b'){
            this.$router.push('/login')
         }
        }
      }
    }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 0px;
  }

  .el-aside {
    color: #333;
  }
  /*.el-container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }*/
 /* .header {
    height: 0px;
    line-height: 60px;
    color: #fff;
  }*/
  /*.userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  }
  .userinfo-inner {
    cursor: pointer;
    color: #fff;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }


  .logo {
  / / width: 230 px;
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .txt {
    color:#fff;
  }

  .logo-width{
    width:230px;
  }
  .logo-collapse-width{
    width:60px
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }

  .main {
    display: flex;
  / / background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }
  aside {
    flex: 0 0 230px;
    width: 230px;
  / / position: absolute;
  / / top: 0 px;
  / / bottom: 0 px;
  }
  .el-menu{
    height: 100%;
  }
  .collapsed {
    width: 60px;
  }
  .item{
    position: relative;
  }
  .submenu{
    position:absolute;
    top:0px;
    left:60px;
    z-index:99999;
    height:auto;
    display:none;
  }



  .menu-collapsed{
    flex:0 0 60px;
    width: 60px;
  }
  .menu-expanded{
    flex:0 0 230px;
    width: 230px;
  }
  .content-container {
  / / background: #f1f2f7;
    flex: 1;
  / / position: absolute;
  / / right: 0 px;
  / / top: 0 px;
  / / bottom: 0 px;
  / / left: 230 px;
    overflow-y: scroll;
    padding: 20px;
  }
  .breadcrumb-container {
  / / margin-bottom: 15 px;
  }
  .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  .breadcrumb-inner {
    float: right;
  }

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }

*/

</style>
