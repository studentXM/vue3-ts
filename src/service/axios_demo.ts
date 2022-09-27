import axios from 'axios'

// 默认根路径
axios.defaults.baseURL = 'http://httpbin.org'
// 超时时间
axios.defaults.timeout = 10000
// 请求头
// axios.defaults.headers = {}
axios
  .post('/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
