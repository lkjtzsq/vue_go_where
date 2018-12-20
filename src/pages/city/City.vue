<template>
  <div class="">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :alphabet="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name:"City",
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res){
      var res=res.data;
      console.log(res)
      if(res.ret && res.data){
        this.cities=res.data.cities;
        this.hotCities=res.data.hotCities ;
      }
    }
  },
  mounted(){
    this.getCityInfo();
  }
}
</script>

<style scoped lang="stylus">
</style>
