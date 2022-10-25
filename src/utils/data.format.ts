import dayjs from 'dayjs'
//导入对utc转换的模块
import utc from 'dayjs/plugin/utc'
// dayjs默认不支持utc格式转换 所以导入utc再拓展到dayjs
dayjs.extend(utc)
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
// 返回时间
export function formatUtcString(
  //   utc的参数
  utcString: string,
  //   我们要转换成的时间格式 这里给了一个默认值
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

// 转换其他时间
// export function formatTimestamp(
//   timestamp: number,
//   format: string = DATE_TIME_FORMAT
// ) {
//   return
// }
