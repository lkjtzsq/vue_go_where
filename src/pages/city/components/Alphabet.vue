<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
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
