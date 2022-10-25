// 从vue导出app类型 代表vue实例
import { App } from 'vue'
import { formatUtcString } from '@/utils/data.format'
// 给全局的对象内加入属性 $代表是全局的属性
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('test---')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
