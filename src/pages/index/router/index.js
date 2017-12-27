import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: HelloWorld
    }
  ]
})
