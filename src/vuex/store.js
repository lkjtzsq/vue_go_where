import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)

axios.get("/api/index.json").then(res=>{
  state.data=res.data;
})

var store=new Vuex.Store({
  state,
  mutations
})
export default store;
