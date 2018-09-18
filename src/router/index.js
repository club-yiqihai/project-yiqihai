import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/passport/login',
      name: 'PassportLogin',
      icon: 'home',
      meta: {
        title: '欢迎登陆',
        routeAuth: false
      },
      component: resolve => require(['../pages/login/login.vue'], resolve),
      children: []
    },
    {
      path: '/layout',
      name: 'mainLayout',
      icon: 'home',
      title: '首页',
      meta: {
        title: '首页',
        routeAuth: true
      },
      component: (resolve) => require(['../pages/layout/index.vue'], resolve),
      children: []
    }
  ]
})

