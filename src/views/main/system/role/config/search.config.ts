import { IForm } from '@/base-ui/form/index'
export const searchFormConfig: IForm = {
  formItems: [
    {
      fieLd: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入用户名'
    },
    {
      fieLd: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
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
