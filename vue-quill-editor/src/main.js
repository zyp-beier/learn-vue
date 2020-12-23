import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return{
      isShowing:false
    }
  },
  methods:{
    show() {
      this.isShowing = !this.isShowing
    }
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
