
// import Home from "@/views/Home"
const Home=()=>import('@/views/Home')
// import Login from "@/views/Login"
const Login=()=>import('@/views/Register')


import Register from "@/views/Register"
import Search from "@/views/Search"
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

import store from '@/store'


export default[
        //每一个路由是一个对象
        {
            path:'/center',
            component:Center,
            children:[
          {
            path:'myorder',
            component:MyOrder

          },
          {
            path:'grouporder',
            component:GroupOrder
          },
          {
            path:'',
            redirect: 'myorder'
          },
        ]
      
       },
       {
        path:'/paysuccess',
        component:PaySuccess,
        beforeEnter: (to, from, next) => {
          if(from.path === '/pay'){
            next()
          }else{
            next('/')
          }
        }
      },
        {
          path:'/pay',
          component:Pay,
          beforeEnter: (to, from, next) => {
            if(from.path === '/trade'){
              next()
            }else{
              next('/')
            }
          }
        },
        {
          path:'/trade',
          component:Trade,
          beforeEnter: (to, from, next) => {
            if(from.path === '/shopcart'){
              next()
            }else{
              next('/')
            }
          }
        },
        {
            path:'/login',
            component:Login,
            meta:{
              isHidden:true
            },
            beforeEnter: (to, from, next) => {
              // 如果登录了，就跳转首页
              if(store.state.user.userInfo.name){
                next('/')
              }else{
                //没登录跳转登录页面
                next()
              }
            }
          },
          {
            path:'/register',
            component:Register
          },
        {
            path:'/shopcart',
            component:ShopCart
          },
          {
            path:'/addcartsuccess',
            component:AddCartSuccess,
            beforeEnter: (to, from, next) => {
              let skuNum = to.query.skuNum
              let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
              if(skuInfo && skuNum){
                next()
              }else{
                next('/')
              }
            }
          },
        {
            path:'/detail/:skuId',
            component:Detail
        },
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
