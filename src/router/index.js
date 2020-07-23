import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBlog from '../components/add_blog'
import ShowBlog from '../components/show_blog'
import Nav from '../components/nav_top'
import Demo1 from '../pages/demo1/index'
import blogDetail from '../components/blog_detail'
import editBlog from "../components/edit_blog";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1 ',
      component:Demo1
    },
    {
      path: '/add_blog',
      name: 'add_blog',
      component: AddBlog
    },
    {
      path: '/show_blog ',
      name: 'show_blog ',
      component:ShowBlog
    },
    {
      path: '/nav_top',
      name: 'nav_top',
      component:Nav
    },
    {
      path: '/blog/:id',
      name: 'blog_detail',
      component:blogDetail
    },
    {
      path: '/edit_blog/:id',
      name: 'edit_blog',
      component:editBlog
    }
  ]
})
