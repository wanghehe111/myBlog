<template>
  <div id="app">
    <nav_top></nav_top>
    <router-view/>
  </div>
</template>

<script>
  import nav_top from "./components/nav_top";
export default {
  name: 'App',
    components:{
      nav_top
    }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
