// //所有的接口请求函数


//每个接口发请求都分装成函数

// /api/product/getBaseCategoryList
// 请求方式  get
// 参数  无

//引入ajax接口和mock数据接口
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'


//写接口请求函数
export const reqCategoryList = () => {
  return Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

// reqCategoryList()

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
