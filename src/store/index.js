import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  /*
  actions: {
    // action changeCity
    changeCity (ctx, city) { // ctx 上下文
      // console.log(city)
      // console.log(ctx)
      ctx.commit('changeCity', city)
      // changeCity 对应 mutations中的 changeCity
    }
  },
  */
  mutations
  /*
  getters: { // 类似 计算属性
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  } */
})
