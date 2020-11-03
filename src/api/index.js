// //所有的接口请求函数


// //
// function sendPOST(){
//   axios.post('http://127.0.0.1/server', 'e=500&f=600', {
//     params: {a:100,b:200},
//     headers: {c:300,d:400}
//   }).then(response => {
//     console.log(response);
//   })
// }

// function sendGET(){
//   axios({
//     //是配置对象
//     //请求的类型
//     method: 'GET',
//     //URL设置
//     url: 'http://127.0.0.1/server', 
//     //参数 
//     params: {
//     //配的是query参数
//       a:100,
//       b:200
//     },
//     //设置请求头信息 查询字符串
//     headers: {
//       c:300,
//       d:400
//     }
//   }).then(response => {
//     console.log(response);
//   });
// }


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




