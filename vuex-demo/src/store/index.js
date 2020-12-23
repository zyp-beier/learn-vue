import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: () => ({
      a: '模块a',
  }),
  getters: {},
  mutations: {},
  actions: {}
};
const moduleB = {
  state: () => ({
    b: '模块b',
  }),
  getters: {},
  mutations: {},
  actions: {}
}




export default new Vuex.Store({
  modules:{
    a: moduleA,
    b: moduleB
  },
  state: {
    count:0,
    girl:{
      name:'zhaoyinping',
      age: 22,
      title: '美少女战士'
    },
    todos:[
      {id:1,text:"...",done:true},
      {id:2,text:"...",done:false}
    ],
    message:5
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    girl: state => {
      return state.girl
    }
  },
  mutations: {
    increment(stage) {
      stage.count++
    },
    handleAddCount(stage) {
      stage.count++
    },
    handleReduceCount(stage) {
      stage.count--
    },
    handleChangeCount(stage,e) {
      stage.count = e.target.value
    },
    changeMessage(stage,value) {
      stage.message = value
    }
  },
  actions: {
    handleAction(context) {
      context.commit('handleAddCount')
    }
  },
})
