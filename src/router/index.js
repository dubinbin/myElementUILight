import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../views/Login/index.vue'

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',component: Login },
    {
      name:'admin',
      path: '/admin',
      component: Login,
      meta:{
        auth:true
      },
      children: [
        {path: '/manger',component:resolve=>System.import('../views/manger/index.vue'),name:'manger'}, //路由懒加载
      ]
    }
  ]
})
