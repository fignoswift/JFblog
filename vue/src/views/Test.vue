
<template>
  <div>
    <el-button type="primary" @click="router.push('/manager/home')">return to @/manager/home</el-button>
    <router-link to="/manager/home">return to @/manager/home</router-link>
    <el-button type="primary" @click="router.back()">return to @/manager/home</el-button>
  </div>

  <div style="font-size:30px;margin-bottom:20px;">
    111111
  </div>

  <div style="font-size:30px;margin-bottom:20px;">
    {{ a }}
    {{ b }}
  </div>

  <div style="font-size:30px;margin-bottom:20px;">
    {{data.a}}
    {{data.b}}
  </div>

  <button @click="increment" style="margin-bottom:20px;">
    Count is: {{count}}
  </button>

  <div style="margin-bottom:20px;">
    <el-input style="width:200px" v-model="data.a" placeholder="请输入名称查询" :prefix-icon="Search" ></el-input>
  </div>

  <div style="margin-bottom:20px;">
    <span style="color:red" v-if="data.name==='佩奇' ">小猪佩奇</span>
    <span style="color:blue" v-else-if="data.name==='乔治' ">小猪乔治</span>
    <span style="color:pink" v-else >小猪朵朵</span>
  </div>

  <div style="margin-bottom:20px;display:flex;">
    <div @click="show(it)" style="margin-right: 10px;text-align:center;line-height:300px;font-size:30px;width:300px;height:300px;background-color:green" v-for="it in data.arr">{{ it }}</div>
    <!--    <div style="margin-right: 10px;text-align:center;line-height:300px;font-size:30px;width:300px;height:300px;background-color:green">2</div>-->
    <!--    <div style="margin-right: 10px;text-align:center;line-height:300px;font-size:30px;width:300px;height:300px;background-color:green">3</div>-->
  </div>

  <div>
    <select style="width:400px;">
      <option  v-for="item in data.fruits">{{item}}</option>
    </select>
  </div>

  <div>
    <!--    <button v-on:click="click">点击加幸运值</button>-->
    <button @click="click">点击加幸运值</button><!--@=v-on-->
  </div>

  <div>
    <div :style="data.box"></div><!--v:bind==:-->
    <div>
      <img :src="data.img" alt="">
    </div>
    <el-button>Default</el-button>
  </div>

  <div style="margin:30px">s
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
    <span style="margin-left:30px">
      <el-icon :size="20" style="top:4px"><View /></el-icon>100
    </span>
    <el-button type="danger" :icon="Delete" circle />
    <!--    &lt;!&ndash; 或者独立使用它，不从父级获取属性 &ndash;&gt;-->
    <!--    <Edit />-->
  </div>

</template>

<script setup>
import {ref,reactive,onMounted} from "vue"
import {Delete,Search} from "@element-plus/icons-vue";
import router from "@/router/index.js";

const a = ref(1)
const b = ref("hello world")

const data = reactive({
  //id: router.currentRoute.value.query.id //接受参数
  a: 123,
  b: "Hello World",
  c: "22341234243",
  d: false,
  name: '佩奇',
  arr: [1,2,3],
  fruits:['苹果','香蕉','菠萝'],
  box:{
    height:'100px',
    width:'100px',
    backgroundColor:'yellow',
  },
  img: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png',
})

//console.log("id="+data.id)//显示参数

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

const click=()=>{
  alert("好运+1")
}

const show=(x)=>{
  alert(x)
}

</script>

<style scoped>

</style>