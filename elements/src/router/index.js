import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main.vue'
import MemberList from '../views/Member/MemberList.vue'
import MemberLevel from '../views/Member/MemberLevel.vue'
import  NotFound from '../views/Member/NotFound.vue'
import axios from 'axios'
import VueAxios from "vue-axios";



Vue.use(Router);
Vue.use(VueAxios,axios)
export default new Router({
  mode:'history',
    routes:[{
      //登录页
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      //首页
      path:'/main',
      name:'Main',
      component:Main,
      children:[{
        path:'/member/list/:id',   //获取参数方式1
        name: 'MemberList',
        component: MemberList
      },
      {
        path:'/member/level/:id',
        name: 'MemberLevel',
        component: MemberLevel,
        props: true   //表示接受参数
      }]
    },
    {
      path: '/goMain',
      redirect: '/main'
    },
    {
      path:'*',
      component:NotFound
    }
    ]
})
