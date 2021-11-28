<template>
  <!-- //以下都是element官网的模板 -->
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '2']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>会员管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link :to="{name:'MemberLevel',params:{id:4}}">会员等级</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/member/list/12">会员列表</router-link>
              </el-menu-item>
             <el-menu-item index="1-3">
                <router-link to="/goMain">回到首页</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>用户中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
           <span>{{$store.getters.getUser.name}}1</span>
          </el-header>

          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Main"
  }
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
