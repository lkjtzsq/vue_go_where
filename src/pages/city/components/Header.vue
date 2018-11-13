<template>
<div class="header">
  城市选择
  <router-link to="/">
    <span class="iconfont header-back">&#xe624;</span>
  </router-link>
</div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    height:$headerHeight
    line-height:$headerHeight
    overflow: hidden;
    color:#fff;
    background: $bgColor
    text-align: center;
    font-size: .32rem;
    font-weight: bold;
    position: relative;
    .header-back
      position: absolute;
      left: 10px;
      color:#fff;
</style>
