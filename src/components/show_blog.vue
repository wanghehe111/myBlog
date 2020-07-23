<template>
<div id="Show_Blog">

  <div class="main">
  <h1  >博客总览</h1>
  <input type="text" v-model="search" placeholder="搜索">
  <div class="blog">
    <section class="everyBlog" v-for="blog in filterBlog">
<!--      钩子函数的使用，如何自定义指令,可以赋值，也可以不赋值-->
<!--      赋值的时候这样做 可以在main.js中使用其进行一系列的判断,注意的是需要在“”号中使用单引号-->
<!--      还可以设置参数-->  `
      <router-link v-bind:to = "'/blog/'+blog.id"> <h4 v-narrow>{{blog.title}}</h4> </router-link>
      <article>{{blog.content}}</article>
    </section>
  </div>
  </div>

</div>
</template>
<!--./../static/posts.json-->
<script>
export default {
name: "show_blog",
    data(){
    return{
        blogs:[],
        //这里必须用数组，filter是数组的方法
        search:'',

    }
    },
    mounted() {
    this.$http.get('https://vue-myblog-965a2.firebaseio.com/posts.json').then(function(data){
        // this.blogs = data.body.slice(0,10);
        // console.log(this.blogs);
        //console.log(data.json());
        return data.json()
    })
        .then(function (data) {
            var blogsArray = [];
            for (let key in data){
                // console.log(data[key]);
                // console.log(typeof data[key])  //这里返回的是一个对象
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            // console.log(blogsArray);
            this.blogs = blogsArray;
        })
    },
  directives: {
      'narrow': {
          bind(el, binding, vnode) {
              el.style.color = 'red';
          }
      }
  },
    filters:{

    },
    computed: {
        filterBlog() {
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search)}  //返回对应的值和索引5
          )
    }
        },


}
</script>

<style scoped>
  #app{
    text-align: center;
  }
  #Show_Blog{
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 800px;

  }
  h1{
    margin-left:50px ;
  }
 .blog{
   box-sizing: border-box;
   padding-bottom:25px ;
   margin: 0 25px;
 }
  section{
    background-color: gainsboro;
    padding: 5px 10px 0px;
    padding-bottom: 20px;
    margin: 25px;
  }
  .nav{
    text-align: center;
    background-color: crimson;
    padding: 25px 0 20px;
    margin:10px 0 ;

  }
  .nav ul{
    display: inline-block;
  }
  .nav li{
    display: inline;
    line-height: 20px;
    font-size: 20px;
    padding:0 60px ;
    color: white;
  }
  button{
    background-color: transparent;
  }
  .main{
    background-color: #2a6496;
    padding-top: 20px;
    margin-top: 60px;
  }
  input{
    margin-left: 50px;
    width: 390px;
    height: 20px;
    padding: 5px 0;
  }
  a{
    padding: 0;
    margin: 0;
    border: 0;
  }

</style>
