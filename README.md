# v3

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

element-plus 按需加载 要根据官方文档来使用 https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5

需要把plugins配置到 vue.config.js中的configureWebpack 对象内作为属性
vue.config.js 相当于webpack.config.js

<!-- 关于axios封装 -->
把token 添加到拦截器当中作验证 以及loading动画

如果我们有两个接口 一个需要token验证以及加载动画效果 而另外一个 只需要动画效果不需要token认证
