# arya-spring-vue-fe
这是一个半吊子前端创建的后台管理系统

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