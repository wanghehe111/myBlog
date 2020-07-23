<template>
  <nav>
    <ul>
      <li >
        <router-link to ="/demo1" >博客</router-link>
      <router-link to ="/add_blog"  >写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>

  export default {
      name :'nav'
  }
</script>
<style>
  nav{
    max-width: 100%;
    text-align: center;
    box-sizing: border-box;
    background-color: crimson;
    margin: 0 auto;
  }
  a{
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 15px;
    border-radius: 5px;


  }
 ul{
    list-style-type: none;
    display: inline-block;
  }
.router-link-active{
      background: rgba(255,255,255,0.8);
      color: #444;
      border-radius: 10px;

  }

</style>
