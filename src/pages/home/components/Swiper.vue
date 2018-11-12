<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="page">
    <!-- slides -->
    <swiper-slide v-for="item in page" :key="item.id"><img class="swipe-img" :src="item.imgUrl" style="opacity: 1;"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import store from '../../../vuex/store.js'
export default {
  name: "HomeSwiper",
  store,
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  },
  computed:{
    page(){
      var newAttr=this.$store.state.data.swiperList
      if(!newAttr){
        return
      }
      return newAttr
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper .swiper-pagination-bullets
  bottom:0
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width:100%
  height: 27vw
  overflow: hidden
  .swipe-img
    width:100%
    display: block

</style>
