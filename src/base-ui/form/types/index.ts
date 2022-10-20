type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  fieLd: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select组件的类型
  options?: any[]
  // 针对特殊选项
  otherOptions?: any
}

// 组件传递属性
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle?: any
}
