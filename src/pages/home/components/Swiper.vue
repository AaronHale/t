<template>
  <div class="swiper">
    <swiper :options="swiperOptions" v-if="showSwiper.length">
      <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 具名插槽-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    background: #eee
    .swiper-img
      width 100%
</style>
