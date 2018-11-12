<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="page">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in page" :key="index">
        <div class="icon" v-for="img in item" :key="img.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="img.src" />
          </div>
          <p class="icon-text">{{img.title}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
import store from '../../../vuex/store.js'
export default {
  name:"HomeIcons",
  store,
  data (){
    return {
      swiperOption: {
        loop:true
      }
    }
  },
  computed:{
    page(){
      const newList=[];
      const newAttr=this.$store.state.data.imgList
      if(!newAttr){
        return
      }
      newAttr.forEach(function(item,index){
        var page=Math.floor(index/8);
        if(!newList[page]){
          newList[page]=[];
        }
        newList[page].push(item);
      });
      return newList
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/maxin.styl'
  .icons
    overflow: hidden
    height: 3.7rem;
    padding-top: .1rem;
    background: #fff
    .icon
      float: left;
      width: 25%;
      padding-top: .1rem;
      text-align: center;
      height: 1.5rem;
      .icon-img
        width:1.1rem;
        height:1.1rem;
        display: inline-block;
        .icon-img-content
          width: 1.1rem;
          height: 1.1rem;
      .icon-text
        color: $blackColor;
        font-size: .28rem;
        ellipsis()
</style>
