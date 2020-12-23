<template>
    <div class="SlideBar">
        <router-link :to="{name: 'Index'}" active-class="active">
          <div class="index">首页</div>
        </router-link>
        <router-link :to="{name: 'FileManagement'}" active-class="active">
          <div class="index">档案管理</div>
        </router-link>
      <router-link :to="{name: 'admin'}" active-class="active">
        <div class="index">小程序设置</div>
      </router-link>
       <router-link :to="{name: 'admin'}" active-class="active">
         <div class="index">管理员设置</div>
       </router-link>
    </div>
</template>

<script>
export default {
  name: 'SlideBar'
}
</script>

<style scoped>
.SlideBar{
  padding:20px;
  /*box-shadow: 1px 2px 3px 2px #efefef;*/
  border-right: 1px solid #efefef;
}
  .index{
    line-height: 50px;
    height:50px;
    text-align: center;
    border-bottom: 1px solid #efefef;
  }
  .index:hover{
    /*background-color: dodgerblue;*/
    /*color: white;*/
  }
  .active{
    background-color: dodgerblue;
    color: dodgerblue;
  }
  a{
    color: #000000;
    text-decoration: none;
  }
</style>
