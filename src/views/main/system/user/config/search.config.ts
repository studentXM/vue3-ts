import { IForm } from '@/base-ui/form/index'
export const searchFormConfig: IForm = {
  formItems: [
    {
      fieLd: 'id',
      type: 'input',
      label: '张三',
      rules: [],
      placeholder: 'ID'
    },
    {
      fieLd: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      fieLd: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      fieLd: 'cellphone',
      type: 'input',
      label: '手机号码',
      rules: [],
      placeholder: '请输入手机号'
    },
    {
      fieLd: 'enable',
      type: 'select',
      label: '用户状态',
      rules: [],
      placeholder: '选择状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      fieLd: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  colLayout: {
    xl: 8,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  itemStyle: { padding: '5px 30px' },
  labelWidth: '100px'
}
