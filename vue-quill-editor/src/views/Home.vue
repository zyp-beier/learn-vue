<template>
  <div class="home">
    123
<!--    <div @click="show">-->
<!--      Vue.mixin-->
<!--      {{isShowing}}-->
<!--    </div>-->
<!--    <div @click="addAge">-->
<!--      mixin-->
<!--      {{age}}-->
<!--    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
  // import mixin from '../mixin';
export default {
  name: 'home',
  options: 'hello!',
  // mixins:[mixin],
  methods:{

  }
};
</script>
