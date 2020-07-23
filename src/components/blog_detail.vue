<template>
  <div id="blog_detail">
    <h4>{{blog.title}}</h4>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类</p>
    <ul>
      <li v-for="type in blog.type"> {{type}}</li>
    </ul>
    <button @click="deleteBlog()">删除</button>
    <router-link v-bind:to = "'/edit_blog/'+this.id" >编辑</router-link>
  </div>
</template>
<script>
    export default {

        data(){
            return{
                id:this.$route.params.id,
                blog: {}

            }
        },
        mounted() {
            this.$http.get('https://vue-myblog-965a2.firebaseio.com/posts/'+this.id+'.json')
                .then(function (data) {
                    // this.blog = data.body;
                    return data.json();
                })
                .then(function (data) {
                    this.blog = data;
                })
        },
        methods:{
            deleteBlog(){
                this.$http.delete('https://vue-myblog-965a2.firebaseio.com/posts/'+this.id+'.json')
                    .then(response =>{
                        this.$router.push({path:'/demo1'})
                    })
            }
        }
    }
</script>
<style scoped>
  #blog_detail{
    width: 600px;
    background-color: gainsboro;
    padding-top: 30px;
    margin: 30px 0 0 70px;
    padding-left:20px ;
    padding-bottom: 30px;
  }
  li{
    list-style-type: circle;
  }
  ul,li{
    margin: 0;
  }
  button{
    width: 100px;
    display: block;
    background-color: rosybrown;
    padding: 10px;
    border-style: none ;
    border-radius: 5px;
    margin-top: 20px;
  }
  a{
    display: block;
    background-color: rosybrown;
    width: 72px;
    margin-top: 20px;
    font-size: 13px;
    text-align: center;
    padding: 13px;
  }
</style>
