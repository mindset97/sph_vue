import {reqGoodsDetailInfo} from '@/api'

const state={
    goodsDetailInfo:{}
}

const mutations={
    RECEIVEGOODSDETAILINFO(state,goodDetailInfo){
        state.goodsDetailInfo=goodDetailInfo
    }
}

const actions={
    async getGoodDetailInfo({commit},skuId){
        const result =await reqGoodsDetailInfo(skuId)
        if(result.code === 200){
            commit('RECEIVEGOODSDETAILINFO',result.data)
        }
    }
}

//麻烦数据用getters
const getters = {
    categoryView(state){
      return state.goodsDetailInfo.categoryView || {}
    },
    skuInfo(state){
      return state.goodsDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
      return state.goodsDetailInfo.spuSaleAttrList || []
    }
  }

  export default{
      state,
      mutations,
      actions,
      getters
  }