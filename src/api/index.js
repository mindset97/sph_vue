// 所有的接口请求函数

// 所有接口都要使用axios去发请求获取数据
// 每个接口发请求都封装成函数
// 哪里需要接口的数据，就调用相关的接口请求函数


// /api/product/getBaseCategoryList
// 请求方式  get
// 参数  无

//引入ajax接口和mock数据接口
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'


//写接口请求函数
export const reqCategoryList = () => {
  //这个ajax是一个文件，怎么返回成函数了？？
  return Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

//测试接口
// reqCategoryList()
// 在main.js文件中直接引入即可
// import "@/api"

// 或者在main.js文件中解构，再调用
// import {reqCategoryList} from "@/api"
// reqCategoryList

//mock接口
export const reqBannerLlist = () => {
  return mockAjax({
    url: '/banner',
    method: 'get'
  })
}

export const reqFloorList = () => {
  return mockAjax({
    url: '/floor',
    method: 'get'
  })
}

//api/list
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: 'list',
    method: 'post',
    data: searchParams
  })
}
// reqGoodsListInfo({})


//获取商品详情数据
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: 'get'
  })
}

export const reqAddOrUpdateShopCart = (skuId,skuNum)=>{
  return Ajax({
      url:`/cart/addToCart/${skuId}/${skuNum}`,
      method:"post"
  })
}


//获取购物车列表数据
export const reqShopCartList=()=>{
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}

//请求修改购物车选中状态
// /api/cart/checkCart/{skuId}/{isChecked}
//get

export const reqUpdateCartIsCheck = (skuId,isChecked) => {
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}


//请求删除购物车单个的
// /api/cart/deleteCart/{skuId}
// delete

export const reqDeleteCart = (skuId) => {
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

// 请求注册用户
// /api/user/passport/register
// post

export const reqUserRegister = (userInfo) => {
  return Ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}
// 请求用户登录
// /api/user/passport/login   post
export const reqUserLogin = (userInfo) => {
  return Ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}


//请求退出登录

///api/user/passport/logout

//get

export const reqUserLogout = () => {
  return Ajax({
    url:'/user/passport/logout',
    method:'get'
  })
}

//请求获取订单交易信息
// /api/order/auth/trade   get

export const reqTradeInfo = () => {
  return Ajax({
    url:'/order/auth/trade',
    method:'get'
  })
}


// 请求创建订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// POST
// 参数  交易编号是query  其余是请求体data

export const reqSubmitOrder = (tradeNo,tradeInfo) => {
  return Ajax({
    url:`/order/auth/submitOrder`,
    method:'post',
    params:{
      tradeNo
    },
    data:tradeInfo
  })
}


// /api/payment/weixin/createNative/{orderId}
// get
// 获取订单号
export const reqOrderInfo = (orderId) => {
  return Ajax({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}


// 请求获取我的订单数据
// /api/order/auth/{page}/{limit}
// get

export const reqMyOrderInfo = (page,limit) => {
  return Ajax({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
  })
}
