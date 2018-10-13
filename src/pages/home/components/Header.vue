<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市景点游玩主题</div>
    <div class="header-right">城市<span class="iconfont icon-arrow">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .header
    display flex
    background $bgColor
    line-height .86rem
    color #fff
    .header-left
      width .64rem
      float left
      .icon-back
        font-size .4rem
    .header-input
      flex 1
      background #ffffff
      height .64rem
      color #ccc
      padding-left .2rem
      line-height .64rem
      border-radius .1rem
      margin-top .12rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .icon-arrow
        margin-left -.04rem
        font-size .24rem
</style>
