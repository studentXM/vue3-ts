export const rules = {
  // require 是否必填
  // trigger 为触发条件
  name: [
    // 这两个触发场景不一样 前者是内容为空 后者是有内容进行正则检测
    { require: true, messgae: '用户名是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { require: true, messgae: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/, //3位以上 无限制
      message: '密码必须是3位字母或数字',
      trigger: 'blur'
    }
  ]
}
