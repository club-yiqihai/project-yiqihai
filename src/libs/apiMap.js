/**
 * 天上月，井中月，桂子枝头迎秋月。登高凭栏眼中月，杯中浊酒有盈缺。
 * 山间风，水边风，圣贤秀中翻书风。御剑江湖趁东风，人生何处不相逢？
 *
 * 对请求进行统一管理
 */
const methodMap = {
  /** 用户列表 **/
  UserList: {url: '/api/userlist', method: 'get'},
  /** 添加角色 **/ 
  MenuList: {url: '/api/menuList', method: 'get'},
};
export default methodMap;
