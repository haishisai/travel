let defaultCity = '上海'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch(e) {console.log('默认城市'+e)}

export default {
  namespaced: true,
  state: {
    city : defaultCity
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
      try {
        localStorage.city = city
      } catch(e) {console.log('store 默认城市'+e)}
      
    }
  }
}