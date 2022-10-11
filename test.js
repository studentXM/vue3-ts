let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

// pid是父元素的id pid跟id进行匹配
// 匹配成功 给对应的对象添加一个children属性用来存放
function tree(arr) {
  var pid = {}
  var result = []

  arr.forEach((element) => {
    pid[element.id] = element
  })

  arr.forEach((index) => {
    let parent = pid[index.pid]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(index)
    } else {
      result.push(index)
    }
  })
  return result
}

console.log(tree(arr))
