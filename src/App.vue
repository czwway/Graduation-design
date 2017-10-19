<template>
  <div id="app">
    
    	<router-view></router-view>
<!--
    <router-link to="/login">Go to login</router-link>
    <router-link to="/index">Go to index</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,div,p,input,h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
