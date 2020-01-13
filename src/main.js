import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'

import './assets/stylus/reset.css'
import './assets/stylus/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
