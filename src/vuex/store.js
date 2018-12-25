import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)
<<<<<<< HEAD

axios.get("/api/index.json").then(res=>{
=======
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
>>>>>>> city-keep
  state.data=res.data;
})

var store=new Vuex.Store({
  state,
  mutations
})
export default store;
