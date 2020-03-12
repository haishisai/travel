<template>
  <div class="box">
    <input
      type="text"
      placeholder="输入城市或拼音"
    >
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'CitysSearch',
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  background-color $bgColor
  height .5rem
  padding  0 .1rem .1rem
  input
    font-size 0.3rem
    width 100%
    padding-left 0.2rem
    box-sizing border-box
    height 0.5rem
    color #666
</style>

