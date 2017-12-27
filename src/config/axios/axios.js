import axios from 'axios'
import qs from 'qs' // 用来字符串化参数，axios预设的机制
// import base from "./base.js"

// axios 配置
// axios.default = base;

// 拦截器，axios.interceptors.request.use, 发送请求前处理
// axios.interceptors.response.use, 接受返回后，回调之前处理处理

 /* eslint-disable */
// POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) =>{
  if(!res.data.code === 2000){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  // 404等问题可以在这里处理
  return Promise.reject(error);
});

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    // 还有第三个参数 config ，就是上面的base
    axios.post(url, qs.stringify(params))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

