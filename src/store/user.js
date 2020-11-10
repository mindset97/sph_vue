import {getUserTempId} from '@/utils/userAbout'
import { reqUserRegister,reqUserLogin,reqUserLogout} from '@/api'

const state={
    //用户临时标识肯定是存储在users的state中
    userTempId:getUserTempId(),
    userInfo: JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}  //考虑自动登录
    
}

const mutations={
RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo  
  },
  REMOVEUSERINFO(state){
    state.userInfo = {}
  }
}
const actions = {
    // userRegister函数是异步的 返回的promise成功或失败，看函数return
    //发请求成功或者失败
  async userRegister({commit},userInfo){
    const result = await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },

 //userLogin函数是异步的 返回的promise成功或失败，看函数的return
  async userLogin({commit},userInfo){
      const result =await reqUserLogin(userInfo)
      if(result.code===200){
        commit('RECEIVEUSERINFO',result.data)
        localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data)) //自动登录
         //存储到localStorage当中是为了做自动登录
        return 'ok'
    } else{
        return Promise.reject(new Error('fail'))
      }

  },

  async userLogout({commit}){
    const result = await reqUserLogout()
    if(result.code === 200){
      //一旦请求退出登录成功，需要删除state当中userInfo当中的数据 并且还要删除localStorage当中的用户信息
      commit('REMOVEUSERINFO')
      localStorage.removeItem('USERINFO_KEY')  
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  }



}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
  }