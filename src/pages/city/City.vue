<template>
  <div class="">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :alphabet="cities" @change="handleLetterChange"></city-alphabet>
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
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('../../../static/mock/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res){
      var res=res.data;
      if(res.ret && res.data){
        this.cities=res.data.cities;
        this.hotCities=res.data.hotCities ;
      }
    },
    handleLetterChange(letter){
      this.letter=letter
    }
  },
  mounted(){
    this.getCityInfo();
  }
}
</script>

<style scoped lang="stylus">
</style>
