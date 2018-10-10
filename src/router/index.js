import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gateway/home/home'
    },
    {
      path: '/login',
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
    },
    {
      path: '/gateway',
      name: 'Ghome',
      icon: 'home',
      title: '首页',
      redirect: '/gateway/home/home',
      meta: {
        title: '首页',
        routeAuth: true
      },
      component: (resolve) => require(['../pages/gateway/home.vue'], resolve),
      children: [
        {
          path: '/gateway/home/home',
          name: 'GHome',
          title: '首页',
          component: (resolve) => require(['../pages/gateway/home/home.vue'], resolve),
        },
        {
          path: '/gateway/active/listactive',
          name: 'GListActive',
          component: (resolve) => require(['../pages/gateway/active/list_active.vue'], resolve),
        },
        {
          path: '/gateway/album/listmyalbum',
          name: 'GListMyAlbum',
          component: (resolve) => require(['../pages/gateway/album/list_my_album.vue'], resolve),
        },
        {
          path: '/gateway/active/editactive',
          name: 'GEditActive',
          component: (resolve) => require(['../pages/gateway/active/edit_active.vue'], resolve),
        },
        {
          path: '/gateway/my/myactive',
          name: 'GMyActive',
          component: (resolve) => require(['../pages/gateway/my/my_active.vue'], resolve),
        }
      ]
    }
  ]
})

