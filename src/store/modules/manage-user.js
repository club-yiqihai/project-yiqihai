import * as types from '../mutation-types';



//定义store的一个实例
const state = {
    userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || [],
    loginToken: window.localStorage.getItem('loginToken') || ''
};

const mutations = {

    //登陆
    [types.USER_LOGIN] (state, {userInfo, token}) {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.localStorage.setItem('loginToken', token);
        state.userInfo = userInfo;
        state.loginToken = token;
    },
    
    //退出
    [types.USER_OUT] (state) {
        //移除用户信息
        window.localStorage.removeItem('userInfo');
        //移除token信息
        window.localStorage.removeItem('loginToken');
        state.userInfo = {};
        state.loginToken = '';
    },

    //设置登陆token
    [types.SET_LOGIN_TOKEN] (state, token) {
        window.localStorage.setItem('loginToken', token);
        state.loginToken = token;
    }
};

export default {
    state,
    mutations
};