<template>
    <div class="index">
    <div class="nav_bar">
      <NavBar></NavBar>
    </div>
    <div class="clear"></div>
      <div class="content">
        <div class="slide_bar">
          <SlideBar></SlideBar>
        </div>
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import SlideBar from '../components/SlideBar'
export default {
  name: 'index',
  components: { SlideBar, NavBar }
}
</script>

<style scoped>
  html body{
  margin: 0;
  padding:0;
}
  .nav_bar{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
  }
  .clear{
    clear: both;
    height:130px;
  }
  .slide_bar{
    width:300px;
    height:100%;
    margin-right:100px;
  }
  .view{
  }
  .content{
    display: flex;
    justify-content: flex-start;
  }
</style>
