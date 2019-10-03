import Vue from 'vue'
import Vuex from 'vuex'
import temps from './modules/temps'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    temps
  },

})