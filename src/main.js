import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import vue from '@vuex'
import '@/api' //这里直接引入api文件，那么api文件就会运行
import store from '@/store'
import * as API from '@/api'
// import '@/api' //这里直接引入api文件，那么api文件就会运行


//引入mockserver文件
import '@/mock/mockServer' 
//引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'

// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 插件内部自定义了一个指令 v-lazy
  loading,  // 指定未加载得到图片之前的loading图片
})

// 在入口文件中引入
import "./validate";

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

//按需引入element-ui当中的组件
import { Message,MessageBox } from 'element-ui';


//注册
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.config.productionTip = false




new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')



