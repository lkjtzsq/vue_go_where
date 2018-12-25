<template>
<div class="list" ref="wrapper">
  <div>
    <div class="area">
      <div class="title border-topbottom">
        当前城市
      </div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">
            {{this.$store.state.city}}
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">
        热门城市
      </div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hot" :key="item.id">
          <div class="button" @click="changeCity(item.name)">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">
        {{key}}
      </div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="changeCity(innerItem.name)">{{innerItem.name}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods:{
    changeCity(name){
<<<<<<< HEAD
      this.$store.commit('changeCity',name)
=======
      this.$store.state.city=name;
      localStorage.city=name;
>>>>>>> city-keep
      this.$router.push('/')
      localStorage.city=name
    }
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  *
    font-size: .2rem;
  .border-topbottom
    &:before
      border-color: #ccc;
    &:after
      border-color: #ccc;
  .border-topbottom
    &:before
      border-color: #ccc;
  .list
    position: absolute;
    top: 1.58rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .title
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color:#666;
      font-size: .26rem;
    .button-list
      overflow: hidden;
      padding:.1rem .6rem 0.1rem .1rem;
      .button-wrapper
        float:left;
        width:33.3%;
        .button
          padding: .1rem 0;
          border-radius: .06rem;
          margin:.1rem;
          border:.02rem solid #ccc;
          text-align:center;
    .item-list
      .item
        line-height: .76rem;
        color:#666;
        padding-left: .2rem;
</style>
