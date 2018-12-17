<template>
<div class="list">
  <div class="area">
    <div class="title border-topbottom">
      当前城市
    </div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">
          北京
        </div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">
      热门城市
    </div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">
          北京
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          天津
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          上海
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          广州
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          深圳
        </div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">
      A
    </div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CityList"
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  *
    font-size: .1rem;
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
      line-height: .4rem;
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
