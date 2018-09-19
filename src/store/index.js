
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import ManageUser from './modules/manage-user';

Vue.use(Vuex)

// store可以理解为一个容器，包含着应用中的state等
export default new Vuex.Store({
    actions,
    modules: {
      ManageUser
    }
    // plugins: [createLogger()]
  });
  