<template>

    <div id="add-blog">

      <from v-if="!submit">
        <h2>写博客</h2>
        <div class="zhuti">
          <label >主题:</label>
          <input type="text" placeholder="请输入博客主题" name="title"  v-model="blog.title">
        </div>
        <div class="content">
          <label > 内容:</label>
          <textarea name="content"  v-model="blog.content"></textarea>
        </div>
        <div class="checkboxs">
          <label>分类:</label>
          <div class="checkboxs1">
          <labe>Vue.js</labe> <input type="checkbox" value="Vue.js" v-model="blog.type">
          <labe>Angular.js</labe><input type="checkbox" value="Angular.js" v-model="blog.type">
          <labe>Node.js</labe> <input type="checkbox" value="Node.js" v-model="blog.type">
          <labe>React.js</labe> <input type="checkbox" value="react.js" v-model="blog.type">
          </div>
        </div>
        <div class="author">
          <label>作者:</label>
          <input  list="authors" v-model="blog.author">
          <datalist id="authors">
            <option v-for="auth in authors">{{auth}}</option>
          </datalist>
          <!--         <select v-model="blog.author">-->
          <!--           <option v-for="auth in authors">{{auth}}</option>-->
          <!--         </select>-->
        </div>
        <div class="submit">
          <input type="submit" value="提交博客" @click.prevent="present">
        </div>
      </from>

      <div class="zongjie">
        <p v-if="submit">您的博客已经提交成功</p>
        <h2>博客预览</h2>
        <p>博客主题:{{blog.title}}</p>
        <p>博客内容:{{blog.content}}</p>
        博客分类:<p class="in" v-for="p in blog.type">{{p}}</p>

        <p>作者:{{blog.author}}</p>
      </div>
    </div>


</template>
<script>
  import nav_top from "./nav_top";
  export default {
      name:'AddBlog',
      data(){
          return{
              blog:{
                  title:'',
                  content:'',
                  type:[],
                  author:''
              },
              authors:['冰心', '鲁迅', '老舍'],
              submit:false
          }
      },
      methods:{
        present(){
            this.submit=true,
            this.$http.post('https://vue-myblog-965a2.firebaseio.com/posts.json'
            ,this.blog)
                .then(function (data) {
                    console.log(data);
                })
        }
      },
  }
</script>
<style scoped>
#app{
  display: block;
}
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin:20px auto;
  max-width: 600px;
  padding: 60px;
}
label{
  display: block;
  padding: 10px 0;
}
input[type='text'], textarea,input[list]{
  width: 500px;
  border: #0f0f0f 1px solid;
  border-radius:5px ;
}
/*.checkboxs{*/
/*  padding:10px 0;*/
/*}*/
.checkboxs1 {
  padding: 20px 0;
}
textarea{
  height: 200px;
}
input[type='submit']{
  border: transparent none;
  background-color: rosybrown;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  margin: 30px 0;
}
.zongjie{
  border: black dotted 1px;
  padding: 20px;
  width: 500px;
}
.zongjie:nth-last-child(2){
  display: inline;
}
  .in{
    display: inline;
    padding-left: 10px;
  }
</style>
