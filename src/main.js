import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import vue from '@vuex'
import '@/api' //这里直接引入api文件，那么api文件就会运行
import store from '@/store'


//引入mockserver文件
import '@/mock/mockServer' 
//引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'



//这里是全局注册
// 引入
import TypeNav from '@/components/TypeNav'
import Floor from '@/components/Floor'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'

//全局注册 
Vue.component('TypeNav',TypeNav)
Vue.component('Floor',Floor)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)




new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')



