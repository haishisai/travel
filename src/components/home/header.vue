<template>
  <div class="header">
    <div class="header-left" >
      <span class="iconfont icon-fanhui" ></span>
    </div>
    <div class="header-input" >
      <span class="iconfont icon-sousuo" ></span>
      输入城市/景点
    </div>
    <div class="header-right" >
      <span class="iconfont icon-jiantou" ></span>
      城市
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header'
}
</script>
<style lang="stylus" scoped >
  .header
    height: .86rem
    line-height: .86rem
    background: #00bcd4
    display: flex
    .header-left
      float: left
      color: #fff
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-left: .12rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      color: #ccc
    .header-right
      float: right
      width: 1.24rem
      text-align: center
      color: #fff    
</style>