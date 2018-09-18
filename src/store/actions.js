import * as types from '../../../vue-backstage-manage-master/src/store/mutation-types.js';

/**
 * 用户登陆
 * @param commit
 * @param userInfo
 * @param token
 */
export const userLogin = ({commit}, {userInfo, token}) => {
  if (userInfo && token) {
    commit(types.USER_LOGIN, {
      userInfo: userInfo,
      token: token
    });
  }
};

/**
 * 用户退出
 * @param commit
 */
export const userOut = ({commit}) => {
  commit(types.USER_OUT);
};

/**
 * 添加tab导航菜单
 * @param commit
 * @param params
 */
export const addNavigationTabs = ({commit}, params) => {
  if (params) {
    commit(types.ADD_NAVIGATION_TAGS, params);
  }
};
/**
 * 添加侧边菜单
 * @param commit
 * @param menu
 */
export const addSideMenu = ({commit}, menu) => {
  if (menu) {
    commit(types.ADD_SIDE_MENU, menu);
  }
};
