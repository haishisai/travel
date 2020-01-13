import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import list from './views/list.vue'
import test from './components/test.vue'
import test2 from './components/test2.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // 因为vue-router的模式不同，导致服务器不能够识别，解决方案就是在 router.js 中 更改路由器的访问模式
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})
