<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item in page" :key="item.id">
      <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import store from '../../../vuex/store.js'
export default {
  name:"Recommend",
  store,
  data() {
    return {

    }
  },
  computed:{
    page(){
      var newAttr=this.$store.state.data.recommendList
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
    display: flex;
    height:1.9rem;
    .item-img
      width:1.7rem;
      height:1.7rem;
      padding: .1rem;
    .item-info
      flex: 1;
      padding: .1rem;
      min-width: 0
      .item-title
        line-height:.54rem;
        font-size:.32rem;
        ellipsis()
      .item-desc
        line-height:.4rem;
        color:#ccc;
        font-size: .24rem;
        ellipsis()
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
