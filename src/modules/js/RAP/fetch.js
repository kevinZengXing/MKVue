let host = require('./host-config.js').host

import axios from 'axios'

function rap(urlList) {
  let obj = {}
  Object.keys(urlList).forEach(key => {
    obj[key] = host + urlList[key]
  })
  return obj
}

function fetch(url, data = undefined) {
  return new Promise((resolve, reject) => {
    axios.post(url,data).then((res) => {
        let result = res.data
        if (result.status === 200) {
          resolve(result)
        } else if (result.status === 300) {
          // 未登录的处理
        } else {
          reject(result)
        }
      },
      (res) => {
        reject({
          status: -1,
          message: '系统错误，请稍后重试'
        })
      })
  })
}

export {
  rap,
  fetch
}
