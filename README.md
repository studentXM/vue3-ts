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


组件类型
给组件ref变量指定一个类型 指定该变量的对应组件
好处: 这么做的好处是 可以针对这个组件的方法做一些限制 比如我们调用了一些不存在的方法 会有提示报错

比如我们给一个ref值传入的是一个组件类型 那么就需要给 这个ref设置泛型 <InstanceType <typeof 组件对象>> 获取组件类型

登陆接口 传入了泛型 之所以传入泛型 是因为 默认 请求下来的数据是一个unknow类型 不方便解构

vue3 用volar
vue2 用vutre  这两个插件会对template有影响
