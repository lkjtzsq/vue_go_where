<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name:"Home",
  data(){
    return {
      text:"hello world"
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods:{
    getHomeInfo(){
      //axios.get('/api/index.json').then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res){
      console.log(res);
    }
  },
  mounted(){
    this.getHomeInfo();
    console.log("mounted")
  },
  activated(){
    console.log("activated")
  }
}
</script>

<style lang="stylus">
  .hello
    background:red;
    h1
      color:#fff;
</style>
