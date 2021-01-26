/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @returns {年月日}
 */
export const formatTime = (times, ymd, hms) => {
  const oDate = new Date(times),
   oYear = oDate.getFullYear()

  let oMonth = oDate.getMonth() + 1,
   oDay = oDate.getDate(),
   oHour = oDate.getHours(),
   oMin = oDate.getMinutes(),
   oSec = oDate.getSeconds(),
   oTime = '' // 最后拼接时间

  // 比较时分秒是否小于十
  oHour = ('0' + oHour).slice(-2)
  oMin = ('0' + oMin).slice(-2)
  oSec = ('0' + oSec).slice(-2)

  // 比较日期是否小于十
  oMonth = ('0' + oMonth).slice(-2)
  oDay = ('0' + oDay).slice(-2)

  // 年月日格式
  switch (ymd) {
    case 'yyyy-mm-dd':
      oTime = oYear + '-' + oMonth + '-' + oDay + ' '
      break
    case 'yyyy/mm/dd':
      oTime = oYear + '/' + oMonth + '/' + oDay + ' '
      break
    case 'yyyy年mm月dd日':
      oTime = oYear + '年' + oMonth + '月' + oDay + '日 '
      break
    default:
      break
  }
  // 时分秒格式
  switch (hms) {
    case 'hh':
      oTime = oTime + oHour
      break
    case 'hh:mm':
      oTime = oTime + oHour + ':' + oMin
      break
    case 'hh:mm:ss':
      oTime = oTime + oHour + ':' + oMin + ':' + oSec
      break
  }
  return oTime
}