import * as types from '../store/mutation-types.js';

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

