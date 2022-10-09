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


<!-- loginAccount -->
获取组件类型 
vue3 中的组件ref属性和vue2中的一样 但是使用的时候 不能使用$.refs

在登录组件中 监测 输入的值是否符合 正则 使用到了 element form的一个属性validate 它是一个函数
我们给form绑定rule 规定好每个表单的正则 然后 在给这个form绑定一个ref 
然后通过 .value.validate（回调函数） 来使用 调用这个函数后 form会进行验证 并且回调函数内也会被调用 回调函数的第一个形参会接受到一个布尔值 它代表我们的输入值是否通过验证
