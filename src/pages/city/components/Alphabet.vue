<template>
  <ul class="list">
    <li
      :ref="item"
      class="item"
      v-for="item of letters"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClcik"
      :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    console.log('updated....')
    this.startY = this.$refs['A'][0].offsetTop
    console.log(this.$refs['A'])
    console.error('子组件的值刚开始是空的 \n' +
        '后期是由父组件传递过来后渲染的，\n' +
        '生命周期经过了mounted 和 updated \n' +
        '可以在updated周期做优化操作')
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClcik (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        this.timer = null
        clearInterval(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  mounted () {
    console.log('mounted....')
    console.log(this.$refs['A'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
