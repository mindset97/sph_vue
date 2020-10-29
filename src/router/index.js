//1、引用并声明使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import Home from "@/views/Home"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Search from "@/views/Search"



export default new VueRouter({
      //配置对象内部使我去定义的路由
    mode:'history',
    routes:[
        //每一个路由是一个对象
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/search/:keyword?',
            name:'search',
            component:Search,
            props: (route)=>({keyword:route.params.keyword, keyword1: route.query.keyword1 })
    
        },
        {
            path:'/',
            component:Home
        },

    ]
})