<script setup>
import router from '@/router/index.js'

</script>

<template>

  <div>
    <div>
      <router-link to="/manager/test">通过router-link->111</router-link>|
      <a href="/manager/test">通过a标签->111</a>
    </div>

    <div style="margin-top:20px">
      <el-button type="primary" @click="router.push('/manager/test')">push to other page</el-button>
      <el-button type="primary" @click="router.replace('/manager/test')">replace other page</el-button>
    </div>

    //router.push("/test?id=1") //传参 ==router.push({path:"/test",query:{id:2}})


  </div>

</template>

<style scoped>

</style>

