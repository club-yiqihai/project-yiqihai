/**
 * 对请求进行统一管理
 */
const methodMap = {
  /** 公共删除图片接口 **/
  RemoveAttachment: {url: '/common/upload/oss_remove', method: 'post'},
  /** 七牛上传token **/
  QiNiuToken: {url: '/common/upload/qi_niu_token', method: 'post'},
  /** 管理登陆接口 **/
  AdminLogin: {url: '/admin/passport/login', method: 'post'},
  /** 用户登陆解锁 **/
  AdminUnlock: {url: '/admin/passport/unlock', method: 'post'},
  /** 角色列表 **/
  AdminGetRole: {url: '/admin/permission/role', method: 'get'},
  /** 添加角色 **/ 
  AdminAddRole: {url: '/admin/permission/add_role', method: 'post'},
  /** 编辑角色 **/
  AdminEditRole: {url: '/admin/permission/edit_role', method: 'post'},
  /** 删除角色 **/
  AdminDelRole: {url: '/admin/permission/delete_role', method: 'post'},
  /** 角色授权列表 **/
  Authorize: {url: '/admin/permission/authorize', method: 'get'},
  /** 保存角色授权 **/
  SaveAuth: {url: '/admin/permission/save_authorize', method: 'post'},
  /** 权限节点接口 **/
  AdminGetRule: {url: '/admin/permission/rule', method: 'get'},
  /** 添加节点接口 **/
  AdminAddRule: {url: '/admin/permission/add_rule', method: 'post'},
  /** 编辑节点接口 **/
  AdminEditRule: {url: '/admin/permission/edit_rule', method: 'post'},
  /** 删除节点接口 **/
  AdminDelRule: {url: '/admin/permission/delete_rule', method: 'post'},
  /** 后台用户列表 **/
  AdminUser: {url: '/admin/backstage_users/index', method: 'get'},
  /** 添加后台用户 **/
  AdminAddUser: {url: '/admin/backstage_users/add', method: 'post'},
  /** 编辑后台用户 **/
  AdminEditUser: {url: '/admin/backstage_users/edit', method: 'post'},
  /** 重置后台用户密码 **/
  RestPassword: {url: '/admin/backstage_users/rest_password', method: 'post'},
  /** 清空头像 **/
  AdminEmptyAvatar: {url: '/admin/backstage_users/empty_avatar', method: 'post'},
  /** 商铺列表 **/
  ShopList: {url: '/admin/shop/list_data', method: 'post'},
  /** 商铺详情 **/
  ShopDetail: {url: '/admin/shop/detail', method: 'post'},
  /** 商铺分类列表 **/
  ShopCategory: {url: '/admin/shop_category/index', method: 'get'},
  /** 添加商铺分类 **/
  ShopCategoryAdd: {url: '/admin/shop_category/add', method: 'post'},
  /** 修改商铺分类 **/
  ShopCategoryEdit: {url: '/admin/shop_category/edit', method: 'post'},
  /** 删除商铺分类 **/
  AreaCategoryDelete: {url: '/admin/shop_category/delete', method: 'post'},
  /** 地区分类列表 **/
  AreaCategory: {url: '/admin/area/index', method: 'get'},
  /** 添加地区分类 **/
  AreaCategoryAdd: {url: '/admin/area/add', method: 'post'},
  /** 修改地区分类 **/
  AreaCategoryEdit: {url: '/admin/area/edit', method: 'post'},
  /** 删除地区分类 **/
  ShopCategoryDelete: {url: '/admin/area/delete', method: 'post'},
  /** 服务标签 **/
  ServiceTag: {url: '/admin/service_tag/index', method: 'post'},
  /** 添加地区分类 **/
  ServiceTagAdd: {url: '/admin/service_tag/add', method: 'post'},
  /** 修改地区分类 **/
  ServiceTagEdit: {url: '/admin/service_tag/edit', method: 'post'},
  /** 活动列表 **/
  ActivityList: {url: '/admin/activity/list', method: 'get'},
  /** 改变活动状态 **/
  ActivitySwitchStatus: {url: '/admin/activity/switch_status', method: 'post'},
  /** 活动分类 **/
  ActivityCategory: {url: '/admin/activity_category/list', method: 'get'},
  /** 活动分类添加 **/
  ActivityCategoryAdd: {url: '/admin/activity_category/add', method: 'post'},
  /** 活动分类修改 **/
  ActivityCategoryEdit: {url: '/admin/activity_category/edit', method: 'post'},
  /** 活动分类修改 **/
  ActivityCategoryDelete: {url: '/admin/activity_category/delete', method: 'post'},
  /** 添加活动 **/
  ActivityAdd: {url: '/admin/activity/add', method: 'post'},
  /** 修改活动 **/
  ActivityEdit: {url: '/admin/activity/edit', method: 'post'},
  /** 活动详情 **/
  ActivityDetail: {url: '/admin/activity/detail', method: 'post'},
  /** 活动商品数据 **/
  ActivityGoods: {url: '/admin/activity/goods', method: 'get'},
  /** 活动订单数据 **/
  ActivityOrder: {url: '/admin/activity_order/list', method: 'get'},
  /** 活动订单数据详情 **/
  ActivityOrderDetail: {url: '/admin/activity_order/detail', method: 'get'},
  /** 文章分类列表 **/
  ArticleCategoryList: {url: '/admin/article_category/list', method: 'get'},
  /** 添加文章分类 **/
  ArticleCategoryAdd: {url: '/admin/article_category/add', method: 'post'},
  /** 修改文章分类 **/
  ArticleCategoryEdit: {url: '/admin/article_category/edit', method: 'post'},
  /** 删除文章分类 **/
  ArticleCategoryDelete: {url: '/admin/article_category/delete', method: 'post'},
  /** 文章列表 **/
  ArticleList: {url: '/admin/article/list', method: 'get'},
  /** 保存文章 **/
  ArticleAdd: {url: '/admin/article/add', method: 'post'},
  /** 修改文章 **/
  ArticleEdit: {url: '/admin/article/edit', method: 'post'},
  /** 删除文章 **/
  ArticleDelete: {url: '/admin/article/delete', method: 'post'},
  /** 前台用户列表 **/
  UserList: {url: '/admin/user/list', method: 'get'},
  /** 前台用户详情 **/
  UserDetail: {url: '/admin/user/detail', method: 'get'},
  /** 消息服务列表 **/
  MessageServicesIndex: {url: '/admin/message_services/index', method: 'get'},
  /** 消息服务添加 **/
  MessageServicesAdd: {url: '/admin/message_services/add', method: 'post'},
  /** 消息服务修改 **/
  MessageServicesEdit: {url: '/admin/message_services/edit', method: 'post'},
  /** 消息服务删除 **/
  MessageServicesDelete: {url: '/admin/message_services/delete', method: 'post'},
  /** 消息服务模板列表 **/
  MessageServicesTemplate: {url: '/admin/message_services/template', method: 'get'},
  /** 添加消息服务模板 **/
  MessageServicesTemplateAdd: {url: '/admin/message_services/add_template', method: 'post'},
  /** 编辑消息服务模板 **/
  MessageServicesTemplateEdit: {url: '/admin/message_services/edit_template', method: 'post'},
  /** 删除消息服务模板 **/
  MessageServicesTemplateDelete: {url: '/admin/message_services/delete_template', method: 'post'},
  /** 消息服务日志列表 **/
  MessageServicesLog: {url: '/admin/message_services/log', method: 'get'}
};
export default methodMap;
