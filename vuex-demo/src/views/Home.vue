<template>
  <div class="home">
<!--    {{this.$store.state.count}}-->
<!--    {{this.$store.state.girl.name}}-->
<!--    {{this.$store.state.girl.age}}-->
<!--    {{this.$store.state.girl.title}}-->
<!--    {{this.$store.getters.doneTodos}}-->
    <div><span style="color:red">...mapState</span>{{name}}</div>
   <div >
      <span style="color:red"> ...mapGetter</span>id:  {{doneTodos[0].id}}姓名:{{girlName.name}}
   </div>
    <div>
        <div>
            使用this.$store.commit('xxx')提交mutation,或者使用mapMutations辅助函数将组件中的method映射为store.commit调用
        </div>
        <div>
            <div>
                {{count}}
            </div>
            <div>
                <input type="button" @click="handleAddCount" value="加1">
                <input type="button" @click="handleReduceCount" value="减1">
            </div>
        </div>
        <div>
            <div>
                使用this.$store.dispatch("xxx")分发action,或者使用mapActions辅助函数将组件的methods映射为store.dispatch调用
            </div>
            <div>
                Action 类似于 mutation，不同在于
                Action 提交的是 mutation，而不是直接变更状态。
                Action 可以包含任意异步操作。
                <button @click="handleAction">action</button>
            </div>
        </div>

        <div>
            {{ Date.now() | Time}}
        </div>
    </div>
      <router-link to="About">About</router-link>
  </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: 'Home',
    data() {
      return{
          content: '这是私有属性'
      }
    },
  computed: {
      count() {
          return this.$store.state.count
      },
      ...mapGetters({
          doneTodos: 'doneTodos' ,
          girlName: 'girl'
      }),
      ...mapState({
         name: state => state.girl.name
      })
  },
    methods: {
        ...mapMutations({
            handleAddCount: 'handleAddCount',
            handleReduceCount: 'handleReduceCount'
        }),
        ...mapActions({
            handleAction: 'handleAction'
        })
    }
}
</script>
