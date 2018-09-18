// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'; //解决恶心的IE6
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Http from './libs/http';
import './mock/index'

Vue.use(iView);
Vue.use(Http);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
