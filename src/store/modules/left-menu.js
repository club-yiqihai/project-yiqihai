import * as types from '../mutation-types';

const state = {
    leftMenuList: JSON.parse(window.localStorage.getItem('sideMenuList')) || []
};

const mutations = {
    //add menu
    [types.ADD_SIDE_MENU] (state, menu) {
      //clone router
      let cloneRouter = Util.cloneObj(SubRouter);
      let newMenu = eachMenu(cloneRouter, menu);
      window.localStorage.setItem('sideMenuList', JSON.stringify(newMenu));
      state.sideMenuList = newMenu;
    },
    //delete all menu
    [types.DEL_SIDE_MENU] (state) {
      window.localStorage.removeItem('sideMenuList');
      state.sideMenuList = [];
    },
    [types.GET_SIDE_MENU] (state) {
    }
  };

export default {
    state,
    mutations
};