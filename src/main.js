/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import TrendChart from "vue-trend-chart";
import global from "@/style/global.css";

import store from "./store";



Vue.config.productionTip = false;
Vue.use(TrendChart);




new Vue({
  vuetify,
  router,
  store,
  global,
  render: h => h(App)
}).$mount('#app');
