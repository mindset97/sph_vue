
import Home from "@/views/Home"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Search from "@/views/Search"
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'


export default[
        //每一个路由是一个对象
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
