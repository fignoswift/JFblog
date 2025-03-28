<script setup>

</script>

<template>
  <div>
    <!--头部开始-->
    <div style="height:60px;background-color:#3535e5">

    </div>
    <!--头部结束-->

    <!--下面部分开始-->
    <div style="display:flex">
      <!--导航栏开始-->
      <div style="width:200px;border-right:1px solid #ddd;min-height:calc(100vh - 60px)">
        <el-menu style="border:0">
          <el-menu-item>系统主页</el-menu-item>
          <el-menu-item>数据统计</el-menu-item>
          <el-menu-item>333</el-menu-item>
          <el-menu-item>444</el-menu-item>
        </el-menu>
      </div>
      <!--导航栏结束-->

      <!--主体区域开始-->
      <div style="flex:1;width:0;background-color:#f9f9fa;padding:10px;">
        <router-view></router-view>
      </div>
      <!--主体区域结束-->
    </div>


    <!--下面部分结束-->
  </div>
</template>

<style scoped>

</style>