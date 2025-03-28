

<template>
  <div style="text-align: center">
    <img src="@/assets/very_sorry.png" alt="">
<!--    <div>404</div>-->
    <div>
      <el-button type="primary" style="width:100px;height:50px;font-size:20px;" @click="router.push('/manager/home')">返回主页</el-button>
    </div>
  </div>


</template>

<script setup>
import router from "@/router/index.js";

</script>

<style scoped>

</style>