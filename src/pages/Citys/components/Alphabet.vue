<template>
  <div class="box">
    <ul>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Alphabat',

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  position absolute
  z-index 100
  right 0.1rem
  top 1.5rem
  ul
    li
      color $bgColor
</style>

