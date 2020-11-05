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
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}

// reqCategoryList()

//mock接口
export const reqBannerLlist=()=>{
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}

export const reqFloorList=()=>{
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}

//api/list
export const reqGoodsListInfo=(searchParams)=>{
  return Ajax({
    url:'list',
    method:'post',
    data:searchParams
  })
}
// reqGoodsListInfo({})




