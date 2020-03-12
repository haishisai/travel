<template>
  <div class="bar">
    <div>
      <router-link
        :to="{name:'Home'}"
        class="rl"
      >Home</router-link>
    </div>
    <div>
      <router-link
        :to="{name:'List'}"
        class="rl"
      >List</router-link>
    </div>
    <div>
      <router-link
        :to="{name:'Other'}"
        class="rl"
      >Other</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar"
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.bar
  width: 100%
  height: 0.6rem
  line-height: 0.6rem
  background-color: $bgColor
  box-sizing: border-box
  position: fixed
  z-index: 1000
  bottom: 0
  display: flex
  justify-content: space-evenly
  div
    flex: 1
    text-align: center
    a
      color: #fff
</style>
