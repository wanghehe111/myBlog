// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResorce from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResorce)
/* eslint-disable no-new */
Vue.directive('xxx1',{
  bind(el,binding,vnode){
    //直接使用指令，没有值和参数
    // el.style.color='red';
    //有值
    // if(binding.value == 'red'){
    //   el.style.color='red';
    // }else{
    //   el.style.color='blue';
    // }
    //使用参数
    if(binding.arg == 'post'){
      el.style.color='yellow';
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
