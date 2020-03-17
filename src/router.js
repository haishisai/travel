import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import List from './pages/List/List.vue'
import City from './pages/City/City.vue'
import Other from './components/Other/Other.vue'

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
      name: 'List',
      component: List
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
