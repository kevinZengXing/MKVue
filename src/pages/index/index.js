// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { fetchPost, fetchGet } from '../../config/axios/axios.js'
import './index.css'

// VUE.config是一个全局配置对象，productionTip是用来阻止vue在启动时生成生产提示
Vue.config.productionTip = true
Vue.prototype.$post = fetchPost
Vue.prototype.$get = fetchGet

// 路由拦截，用来判断是否登录
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//             next();
//         }
//         else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     }
//     else {
//         next();
//     }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
