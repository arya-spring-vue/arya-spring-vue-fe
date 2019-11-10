![](https://github.com/arya-spring-vue/arya-spring-vue-fe/blob/master/screenshot/arya-spring-vue-fe.png)

# arya-spring-vue-fe
这是一个后台管理系统的前端部分，前端技术架构vue-cli, iView, axios, typescript, vue全家桶

### 前端技术架构

 步骤| 技术
------------ | -------------
脚手架 | vue-cli3.0
UI框架 | vue2.0, iView3.0
项目语言 | typescript3.0, sass
HTTP库 | axios
状态管理 | vuex
路由管理 | vue-router
lint工具 | eslint, prettier
单测库 | mocha, chai


### 项目开发过程
#### 1.初始化项目
vue-cli3.0: `vue create arya-spring-vue-fe`，根据前端技术架构手动选择需要引入的依赖，部分依赖需要手动引入。
#### 2.通用HTTP请求库
基于axios编写通用前端HTTP请求库。
- 支持GET方法的query parameters，POST方法的form data
- 支持401，402，403跳转
- 支持请求拦截，响应拦截
- 支持请求异常处理
#### 3.通用工具库
收录工作中常用的函数到util.js，避免重复造轮子。
#### 4.用户菜单路由
基于vue-router编写用户路由菜单路由页面。
#### 5.注入常用全局插件
- 基于vue实例的event bus对象 $bus
- 基于lodash.js的函数库对象 $_
#### 6.组件设计
- site component 项目全局组件，复用性高
- page component 特定页面组件，耦合性高
#### 7.样式管理
- 基于sass创建全局通用样式类，分类方式待定
- 采用在BEM基础上严谨的姓氏命名法命名css class名
#### 8.版本管理
- commit提交严格按照commit规范提交
- 引入git flow进行项目管理，与npm的major，minor，patch对应
#### 9.文档管理
- 统一在DOCS目录管理文档，文档包括Plugins，VersionCtrl，EventBus
- 添加特殊的CHANGELOG，记录每一次的功能提交

#### 10.待定
- 状态管理设计，需根据具体业务场景设计

## 项目安装
```
yarn install
```

### 开发环境启动服务
```
yarn run serve
```
本地服务运行在localhost:3000，通过`vue-cli-service serve --port 3000`指定。

### 编译打包到生产环境
```
yarn run build
```

### eslint检查错误
```
yarn run lint
```

### 运行单元测试
```
yarn run test:unit
```
