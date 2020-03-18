import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city : '上海'
  },
  // 异步 需要 actions
  actions: {
    // ctx 上下文 store的状态   city 内容
    changeCity (ctx, city) {
      ctx.commit('changeCity2', city )
    }
  },
  mutations: {
    changeCity2 (state, city) {
      // if (city === '您搜索的地方不存在') {
      //   return
      // }
      state.city = city
    }
  }
})