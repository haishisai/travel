<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点
    </div>
    <div class="header-right">
      <span class="iconfont icon-jiantou"></span>
      {{city}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped >
@import '~styles/varibles.styl'
.header
  height: 0.86rem
  line-height: 0.86rem
  background: $bgColor
  display: flex
  .header-left
    float: left
    color: #fff
  .header-input
    flex: 1
    background: #fff
    border-radius: 0.1rem
    margin-left: 0.12rem
    margin-top: 0.12rem
    height: 0.64rem
    line-height: 0.64rem
    color: #ccc
    padding-left: 0.2rem
  .header-right
    float: right
    width: 1.24rem
    text-align: center
    color: #fff
</style>