<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <p class="banner-title">大连圣亚海洋世界（AAAA景区）</p>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imags="imags" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  comments: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imags: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_r_800x800_b9a5440a.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding  0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
