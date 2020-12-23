<template>
    <div id="app">
         <div class="nav">
           <div>
             <router-link to="/">Home</router-link>
           </div>
           <div>
             <router-link to="/about">About</router-link>
           </div>
           <div>
             <router-link to="/element-form">element</router-link>
           </div>
         </div>
       <router-view/>
    </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 50%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
