import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import 'styles/reset.css'
import 'styles/iconfont.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'

// // 全局点击事件 应该不推荐用
// Vue.config.productionTip = false
// Vue.prototype.globalClick = function (callback){
//     document.onclick = function(){
//         callback()
//     }
// }

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
