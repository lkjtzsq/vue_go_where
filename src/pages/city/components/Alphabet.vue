<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of alphabet" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
    alphabet:Object
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  *
    font-size: .3rem;
  .list
    position: absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    width:.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .item
      line-height: .4rem;
      color: $bgColor
</style>
