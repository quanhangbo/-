// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false
//路由跳转之前
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  console.log('to.path' + to.path)
  console.log('isLogin:' + isLogin)
  if (to.path == '/logout') { //登出时,清理session,跳转至登录界面
    sessionStorage.clear();
    next({
      path: '/login'
    });
  } else if (to.path == '/login') { //已经登陆还点击登录,跳转至主界面
    if (isLogin != null) {
      next({
        path: '/main'
      });
    } 
  }else if (isLogin == null) { //如果没有登录状态
      next({
        path: '/login'
      });
    }
  next(); //跳转到下一个钩子函数
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
