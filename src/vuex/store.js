import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
var state={
  data:""
}
axios.get("/api/index.json").then(res=>{
  state.data=res.data;
})
var mutations={
  reduce(){
    state.num--;
  }
}
var store=new Vuex.Store({
  state,
  mutations
})
export default store;
