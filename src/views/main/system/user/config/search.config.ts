import { IForm } from '@/base-ui/form/index'
export const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: '张三',
      rules: [],
      placeholder: '测试'
    },
    {
      type: 'input',
      label: '张三的id',
      rules: [],
      placeholder: '测试'
    },
    {
      type: 'password',
      label: '张三的密码',
      rules: [],
      placeholder: '测试'
    },
    {
      type: 'select',
      label: '张三的运动',
      rules: [],
      placeholder: '测试',
      options: [
        { title: '足球', value: 'football' },
        { title: '游戏', value: 'game' }
      ]
    },
    {
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
