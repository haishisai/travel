import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import list from './pages/list.vue'
import test from './components/test/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // 因为vue-router的模式不同，导致服务器不能够识别，解决方案就是在 router.js 中 更改路由器的访问模式
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
