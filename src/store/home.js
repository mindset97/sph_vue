
//看接口文档返回的data
import {reqCategoryList} from '@/api'


const state={
    //存数据 拿到是三级分类列表的数据 数据类型 看接口文档 返回的空数组
    CategoryList:[]
}
   ////修改state数据 赋值操作
const mutations={
    REVICEREQCATEGORYLIST(state,CategoryList){
        state.CategoryList=CategoryList
    }
}

const actions={
    // 异步action 发请求
    // 定义一个获取数据的函数
    async getCategoryList(content){
        //等待发请求函数的结果
        const result =await reqCategoryList()
        if(result.code === 200){
            content.commit('REVICEREQCATEGORYLIST',result.data)
    }
}

}
export default {
    state,
    mutations,
    actions,
  }
