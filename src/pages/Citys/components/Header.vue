<template>
    <div class="box" >
      <span>城市选择</span>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
    name: 'CitysHeader',

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.box
  text-align: center
  background-color: $bgColor
  span
    height: .76rem
    line-height: .76rem
    color: #fff
    font-size: .3rem
</style>

