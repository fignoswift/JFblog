import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/', redirect: '/manager/home'},
      {path: '/manager',component: () => import('../views/Manager.vue'),children:[
          {path: 'home', name: 'home', meta:{title:"主页"},component: () => import('../views/Home.vue')},//默认‘/’将跳转至该页面
          {path: 'test', name: 'test', meta:{title:"测试页"},component: () => import('../views/Test.vue')},
          {path: 'data', name: 'data', meta:{title:"数据页"},component: () => import('../views/Data.vue')},
      ]},
      {path: '/404', name: 'NotFound', meta:{title:"404找不到页面"},component: () => import('../views/404.vue')},
      {path: '/:pathMatch(.*)', redirect: '/404'},//官方定义，含义为重定向所有页面为404页面
  ],
// {path: '/', redirect: '/home'},重定向，将/重定向绑定到/home上
})

//beforeEach表示跳转之前的一些操作
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router
