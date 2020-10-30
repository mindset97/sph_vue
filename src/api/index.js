//所有的接口请求函数

//每个接口发请求都分装成函数

// /api/product/getBaseCategoryList
// 请求方式  get
// 参数  无


import Ajax from '@/ajax/Ajax'

export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}


reqCategoryList()