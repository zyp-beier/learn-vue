<template>
  <div class="about">
    <div>{{name}}</div>
    <div>{{count}}</div>
    <input type="text" :value="count" @input="handleChangeCount">

    <input type="button" value="加" @click="handleAddCount">

    <div>双向绑定的计算属性</div>
    {{message}}
    <input type="text" v-model="message">
<!--    <div class="box">-->
<!--      content-->
<!--    </div>-->
<!--    <div class="box2">-->
<!--      content-->
<!--    </div>-->
<!--    <div>-->
<!--      123-->
<!--    </div>-->
<!--    <div class="father">-->
<!--      <div class="son">-->
<!--        content-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="wrap">-->
<!--      <div class="item">-->
<!--        浮动-->
<!--      </div>-->
<!--      <div>-->
<!--        不浮动-->
<!--      </div>-->
<!--    </div>-->
<!--    <div>
      <div class="boxing"></div>
      <div class="boxing"></div>
      <div class="boxing">1</div>
      <div class="boxing"></div>
    </div>-->
    <div class="one">

    </div>
    <div class="two">
      <div class="inner"></div>
    </div>
  </div>
</template>


<script>
  import {mapMutations, mapState} from "vuex";

  export default {
      name: 'About',
      data() {
        return{

        }
      },
      computed: {
        message:{
          get() {
            return this.$store.state.message
          },
          set(value) {
            this.$store.commit('changeMessage',value)
          }
        },
        ...mapState({
          name: state => state.girl.name,
          count: state => state.count
        })
      },
      methods: {
        ...mapMutations({
          handleAddCount: 'handleAddCount',
          handleChangeCount: 'handleChangeCount'
        }),
        // handleChangeCount(e) {
        //   this.$store.commit('handleChangeCount',e.target.value)
        // }
      }
  }
</script>
<style>
  .box{
    width:300px;
    padding:100px;
    border: 1px solid red;
    margin:100px;
  }
  .box2{
    margin:100px;
    width:300px;
    padding:100px;
    border: 1px solid red;
    box-sizing: border-box;
  }
  .father{
    width: 200px;
    height:200px;
    margin-top: 10px;
   border: 1px solid red;
  }
  .son{
    width:100px;
    margin-top: 100px;
    background-color: pink;
  }
  .wrap{
    width:400px;
  }
  .item{
    width:200px;
    height:200px;
    background-color: rebeccapurple;
    float:left;
  }
  .boxing {
    width:100px;
    height:100px;
    border: 1px solid #111;
  }
  .boxing:first-child {
    position: relative;
    left: 50px;
    top: 50px;
  }
  .boxing:nth-child(3) {
    position: fixed;
    right: 0;
    top: 0;
  }
  .one{
    /*第一种方法*/
   /* width:50%;
    height:50vw;
    background-color: red;*/
    /*第二种方法
    width:50%;
    padding-top:50%;
    background-color: #ccc;*/
    /*第四种方法*/
/*    width: 50%;
    background-color: #ccc;*/
  }
  .one:after{
    content: '';
    padding-top:100%;
    display: block;
  }
  .two{
    width: 50%;
    background-color: #333;
    overflow: hidden;
  }
  .inner{
    margin-top: 100%;
  }
</style>
