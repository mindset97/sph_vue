import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


new Vue({
  render: h => h(App),
  router 
  // 当我们安装完router后，每个组件都可以通过$this.routers 路由器对象
  // 每个组件都可以通过$this.route 路由对象

}).$mount('#app')
