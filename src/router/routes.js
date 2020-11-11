
import Home from "@/views/Home"
import Login from "@/views/Login"
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
          component:PaySuccess
        },
        {
          path:'/pay',
          component:Pay
        },
        {
          path:'/trade',
          component:Trade
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
            path:'/shopcart',
            component:ShopCart
          },
        {
            path:'/addcartsuccess',
            component:AddCartSuccess
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
