import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import vue from '@vuex'
import '@/api' //这里直接引入api文件，那么api文件就会运行
import store from '@/store'



//这里是全局注册
// 引入
import TypeNav from '@/components/TypeNav'
import Floor from '@/components/Floor'

//全局注册 
Vue.component('TypeNav',TypeNav)
Vue.component('Floor',Floor)




new Vue({
  render: h => h(App),
  router,
  store
  // store
  // 当我们安装完router后，每个组件都可以通过$this.routers 路由器对象
  // 每个组件都可以通过$this.route 路由对象

}).$mount('#app')



