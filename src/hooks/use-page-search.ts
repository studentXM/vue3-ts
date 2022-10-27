// 引入ref
import { ref } from 'vue'
// 引入search的外层组件
import PageContent from '@/components/page-content'
export function usePageSearch(): any {
  const PageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    PageContentRef.value?.getPageData()
  }
  const handlequeryClick = (queryInfo: any) => {
    console.log(PageContentRef.value)
    PageContentRef.value?.getPageData(queryInfo)
  }
  // 返回 ref对象 重置函数 参数搜索函数
  return [PageContentRef, handleResetClick, handlequeryClick]
}
