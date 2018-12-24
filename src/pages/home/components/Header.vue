<template lang="html">
<div class="header">
  <div class="header-left"><span class="iconfont">&#xe624;</span></div>
  <div class="header-input"><span class="iconfont input-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
  <router-link to="/city">
    <div class="header-right">{{this.$store.state.city}}<span class="iconfont">&#xe6aa;</span></div>
  </router-link>
</div>
</template>

<script>
import store from '../../../vuex/store.js'
import {mapState} from 'vuex'
export default {
  name:"HomeHeader",
  data (){
    return {

    }
  },
  store,
  computed:{
    page(){
      var newAttr=this.$store.state.data.city
      if(!newAttr){
        return
      }
      return newAttr
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  display: flex;
  height: $headerHeight
  line-height:$headerHeight
  background:#00bcd4;
  font-size:.3rem;
  overflow: hidden;
  color:#fff;
  .header-left
    width:.8rem;
    text-align: center;
  .header-right
    padding: 0 .12rem;
    text-align: center;
    color:#fff;
  .header-input
    flex:1;
    height: .6rem;
    margin-top: .13rem;
    line-height: .6rem;
    border-radius: 3px;
    color:#e4e7ea;
    background: #fff;
    font-size:.28rem;
  .input-icon
    padding-left: 6px;
    padding-right: 4px;
    vertical-align: -1px;
</style>
