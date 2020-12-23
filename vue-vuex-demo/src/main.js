import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    msg:0,
    list:[
      {
        name:'aa',
        age:20
      },
      {
        name:'bb',
        age:19
      }
    ],
    data:7
  },
  mutations:{
 add(state,payload){
   // parseInt(state.msg)+=parseInt(payload.number);
   /*   let msg = parseInt(state.msg);
      let number = parseInt(payload.number);
       return  msg += number;
      console.log(msg)
      console.log(number)*/
   state.msg += payload.number
 },
    remove(state,payload){
   state.msg-=payload.number
    }
  },
  getters:{
   data(state){
      return state.data<10? state.data+(10-state.data) : state.data
   }
  },
  modules:{
    hellow
  }
 /* actions:{
    add(state){
      return state.msg++
    },
    remove(state){
      return state.msg--
    }
  }*/
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
