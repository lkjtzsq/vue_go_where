<template>
<div class="">
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
  </div>
  <div class="search-content" ref="search" v-show="keyword.length">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="changeCity(item.name)">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项目</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods:{
    changeCity(name){
<<<<<<< HEAD
      this.$store.commit('changeCity',name)
=======
      this.$store.state.city=name
      localStorage.city=name
>>>>>>> city-keep
      this.$router.push('/')
      localStorage.city=name
    }
  },
  computed:{
    hasNoData(){
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list=[]
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted(){
    this.scroll=new Bscroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    height:.72rem;
    padding:0 .1rem;
    background: $bgColor
    .search-input
      width:100%;
      height:.62rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      font-size: .3rem;
      display: block;
      color:#666;
      padding: 0 .1rem;
      box-sizing: border-box;

  .search-content
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left:0;
    right:0;
    bottom: 0;
    background: #fff;
    .search-item
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      font-size:.3rem;
</style>
