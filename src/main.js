import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import fastClick from 'fastclick'
import './assets/stylus/reset.css'
import './assets/stylus/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
