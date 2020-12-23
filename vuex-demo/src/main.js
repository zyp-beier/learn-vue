import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Time} from "../util";

Vue.config.productionTip = false

Vue.filter('Time',Time)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
