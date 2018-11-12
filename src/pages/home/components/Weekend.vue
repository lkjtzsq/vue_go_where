<template>
<div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item in page" :key="item.id">
      <div class="item-img-box">
        <img class="item-img" :src="item.imgUrl" />
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import store from '../../../vuex/store.js'
export default {
  name:"Weekend",
  data() {
    return {

    }
  },
  store,
  computed:{
    page(){
      var newAttr=this.$store.state.data.weekendList
      if(!newAttr){
        return
      }
      return newAttr
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/maxin.styl'
  .title
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    font-size: .3rem;
  .item
    overflow: hidden;
    .item-img-box
      height: 0;
      padding-bottom: 33.4%;
      overflow: hidden;
      .item-img
        width:100%;
    .item-info
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title
        line-height:.54rem;
        font-size:.32rem;
        color:#212121;
      .item-desc
        line-height:.4rem;
        color:#616161;
        font-size: .24rem;
        padding-bottom: .2rem;
      .item-button
        background: #ff9300;
        margin-top: 0.16rem;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
        display: block;
        line-height: .44rem;
        border: none;
        font-size: .24rem;
</style>
