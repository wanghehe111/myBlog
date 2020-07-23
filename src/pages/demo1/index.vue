<template>
  <div id="index">

    <show_blog></show_blog>

  </div>
</template>
<script>
  import show_blog from "../../components/show_blog";
  import nav_top from "../../components/nav_top";
  export default {
      data(){
          return{

          }
      },
      components:{
          show_blog,nav_top
      }
  }
</script>
