# project-yiqihai

参考：https://github.com/myxingke
参考博客：https://blog.csdn.net/xiaoping_1988/article/details/80073209
github: https://github.com/xiaoping1988/vue-template-proj

项目介绍
--
vue.js+node.js+webpack构建的前端项目

项目展示
--
地址：


项目目录结构
--

```
├── build  构建脚本目录
    ├── build.js  生成环境构建脚本
    ├── check-versions.js  检查npm，node.js版本 
    ├── utils.js  构建相关工具方法
    ├── vue-loader.conf.js  配置了css加载器以及编译css之后自动添加前缀
    ├── webpack.base.config.js  webpack基本配置
    ├── webpack.dev.config.js  webpack开发环境配置
    ├── webpack.prod.config.js  webpack生成环境配置
├── config  项目配置
    ├── dev.env.js  开发环境变量
    ├── index.js  项目配置文件
    ├── prod.env.js  生产环境变量
├── node_modules  npm加载的项目依赖模块
├── src
    ├── assets  静态资源目录，会被webpack构建
    ├── compinents 
    ├── router  路由配置
    ├── store  状态管理
    ├── App.vue  入口页面
    ├── axios.js  axios配置
    ├── main.js  main.js
├── static  静态资源目录，如图片、文字等，不会被webpack构建
├── index.html  首页入口文件，可以添加一些meta信息
├── package.json  npm包配置文件，定义了项目的npm脚本，依赖包等信息

```

技术栈
--
     - vue2
     - vuex 状态管理store
     - vue-router  vue路由
     - axios  前后端通信，类似ajas
     - iview  UI组件库
     - mockjs  前后端分离，前端使用mockjs模拟数据
     - webpack  前端自动打包工具
     - oauth2  安全授权协议
 

前端界面开发
--
    注：需要安装nodejs
    
     - 启动：
       1. 命令行进入项目文件夹
       2. 运行npm install
       3. 运行npm run init 初始化项目
       4. 运行npm run dev 启动前端工程
    - 打包命令：
      运行npm run build

打包发布
--
    1. 运行npm run build后，得到 dist文件+index_prod.html。（index_prod.html为项目的入口html）
    2. 使用nginx发布。（[nginx配置参考文件](https://github.com/smallsnail-wh/interest/blob/master/nginx.conf)）
	
Http状态码
--
	在axios.js中拦截异常，并进行处理。
	目前以写的异常处理有：
		1. 401 清除token信息并跳转到登录页面
		2. 403 无权限，跳转到首页
    
如果你项目启动有错误：
--
    项目启动报错，请试一下用管理员权限输入命令。


前后端分离，数据结构定义（暂定）
--
    {
      code: 0, // 状态码,0代表后端逻辑正常,通过此状态码可做统一提示
      msg: "提示信息", // 后端逻辑错误时,可将提示信息写在此用于提示用户
      result: {} 或者 []  // 逻辑正常情况下，返给前端的具体数据
    }

权限控制
--
    权限控制分两种：登陆权限和资源权限

新建项目需要考虑的问题
--
    1、需要引入哪些js
    2、目录结构如何规划
    3、前后端分离之后,数据结构如何定义
    4、如何做mock开发
    5、权限如何控制，左侧菜单栏怎么显示（根据后端返回的数据动态加载还是）
    6、如何做统一的错误提示
    7、如何做ajax请求
    8、全局组件和全局方法有哪些


组件安装：（为了防止错乱）
--
    axios安装：
    --    
    进入项目执行  npm install axios
    引入  这里对axios进行了封装，所以在axios.js中
            import Axios from 'axios';
            import Qs from 'qs';
    
    iview安装：
    --
    进入项目执行  npm install iview --save
    引入   在main.js中
            import iView from 'iview';
            import 'iview/dist/styles/iview.css';
            Vue.use(iView);

    babel-polyfill安装： 解决ie9和一些低版本的高级浏览器对es6新语法的不支持
    --
    进入项目执行  npm install --save-dev babel-polyfill
    引入    在main.js中

    vuex安装：
    --
    进入项目执行  npm install vuex --save

登陆过程，一种前端方案：
--
    1、检查状态：进入页面时或路由变化时检查是否有登陆状态
    2、如果是登陆状态则查询登陆信息并保存起来，如果没有则跳转到登陆页
    3、在登陆页面，校验用户输入信息是否合法
    4、校验通过后发送登录请求；校验不成功进行提示
    5、登陆成功则从后端数据中取出session信息
    6、用户退出删除登陆状态
