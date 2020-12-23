<template>
  <div id="app">
   <!-- {{msg}}
    我有{{little}}个小目标-->
    {{data}}
    <!--<input type="number"  v-model="number">
    <input type="number" v-model="little">
    <button @click="add">++</button>
    <button @click="remove">&#45;&#45;</button>-->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>


  import {mapGetters, mapState} from "vuex";

  export default ({
    data(){
      return{
        little: 0,
        number:0
          }
    },
   /* computed:mapState([
       "msg"
    ]),*/
   computed:{
     ...mapState([
              'msg'
     ]),
     ...mapGetters([
             'data'
     ])
   },
    methods:{
      add(){
      this.$store.commit('add',{
              number:this.number
      });
    },
      remove(){
      this.$store.commit({
        type: 'remove',
        number:this.number
      })
      }
    }
  })
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
