/*jshint esversion: 6 */

import Vue from 'vue'
import Vuex from 'vuex'
import temps from './modules/temps'
import oneTemp from './modules/oneTemp'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    temps,
    oneTemp
  },

})