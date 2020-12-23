<template>
    <div class="navBar">
      <div class="layout">
        <div class="logo">
          <img src="../assets/heymom-login.jpg" alt=""/>
        </div>
        <div class="name">
          档案查询管理后台
        </div>
      </div>
      <div class="layout">
        <div class="avatar">
          <img src="../assets/heymom-login.jpg" alt=""/>
        </div>
        <div class="">
          退出登录
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navBar{
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height:80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:5px 15px;
  box-shadow: 1px 2px 3px 2px #efefef;
}

.logo{
  width:80px;
  margin-right:15px;
}
 img {
   width: 100%;
 }
  .avatar{
    margin-right:15px;
  }
  .avatar img{
    width:64px;
    height:64px;
    border-radius: 50%;
  }
  .layout{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name{
    font-size: 22px;
  }
</style>
