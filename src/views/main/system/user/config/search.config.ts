import { IForm } from '@/base-ui/form/index'
export const searchFormConfig: IForm = {
  formItems: [
    {
      fieLd: 'id',
      type: 'input',
      label: '张三',
      rules: [],
      placeholder: '测试'
    },
    {
      fieLd: 'name',
      type: 'input',
      label: '张三的name',
      rules: [],
      placeholder: '测试'
    },
    {
      fieLd: 'password',
      type: 'password',
      label: '张三的密码',
      rules: [],
      placeholder: '测试'
    },
    {
      fieLd: 'sport',
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
      fieLd: 'createTime',
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
