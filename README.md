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

动态icon
<el-icon
                  ><component
                    :is="item.icon.replace('el-icon-', '')"
                    style="width: 16px; height: 16px"
                  ></component
                ></el-icon>

使用compoent中得is属性来接受 icon得name值
注意这里后台返回的字符需要截取一下 我们只用到el-icon 后面的值才会生效图标


<!-- 导航菜单保存点击高亮 -->
根据当前的路由中的id 显示导航菜单 


<!-- 自定义表单组件的双向绑定 -->
父组件 把需要接收数据的变量对象 使用v-model传输给 组件
组件内对应 传输过来的 对象 并进行v-model双向绑定
子组件内props内固定声明一个 modelValue

setup函数声明两个形参 一个是 props 一个是 上下文对象 这个对象里面有emit可以发送事件
使用一个ref变量 解构props内的变量 这里利用浅拷贝 然后把这个ref变量绑定到页面的表单 
我们监听的也是这个新ref变量  这样就脱离了 单向数据流

在setup函数中使用watch监听 我们的数据 如果是对象需要深度监听

watch（数据名，回调函数（最新值））在watch回调函数内我们
子组件内声明一个事件[‘update：modelValue’] 这个事件是是固定的 这样才能和外面父组件的v-model对应