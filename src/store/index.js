//三步走
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state={}
const mutations={}
const actions={}
const getters={}

import home from './home'
import search from './search'
import detail from './detail'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search,
        detail
    }
})