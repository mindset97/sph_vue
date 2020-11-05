import {reqGoodsListInfo} from '@/api'

const state={
    goodsListInfo:{}
}

const mutations={
    RECEIVEGOODSLISTINFO(state,goodsListInfo){
      state.goodsListInfo=goodsListInfo
    }

}
const actions = {
    async getGoodsListInfo({commit},searchParams){
      const result = await reqGoodsListInfo(searchParams)
      if(result.code === 200){
        commit('RECEIVEGOODSLISTINFO',result.data)
      }
    }
  }

  //包含n个计算属性方法的数据
  const getters = {
    //是把获取到的对象当中的数组全部计算出来
    goodsList(state){
      return state.goodsListInfo.goodsList || []
    },
    attrsList(state){
      return state.goodsListInfo.attrsList || []
    },
    trademarkList(state){
      return state.goodsListInfo.trademarkList || []
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }