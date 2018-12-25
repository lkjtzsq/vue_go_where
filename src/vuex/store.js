import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
var state={
  data:"",
  city:"北京"
}
try{
  if(localStorage.city){
    state.city=localStorage.city
  }
}catch(e){

}
axios.get("/api/index.json?city="+state.city).then(res=>{
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
