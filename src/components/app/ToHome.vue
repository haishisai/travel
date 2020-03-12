<template>
  <div class="box">
    <router-link :to="{name:'Home'}">
      <span>
        首页
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'ToHome'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  position fixed
  z-index 100
  width 1rem
  height 1rem
  line-height 1rem
  background-color $bgColor
  text-align center
  border-radius 50%
  bottom 1.5rem
  right 0.5rem
  opacity 0.8
  span
    color #fff
</style>