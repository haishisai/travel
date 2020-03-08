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
        :to="{name:'list'}"
        class="rl"
      >list</router-link>
    </div>
    <div>
      <router-link
        :to="{name:'test'}"
        class="rl"
      >test</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar"
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
  bottom: 0
  display: flex
  justify-content: space-evenly
  div
    flex: 1
    text-align: center
    a
      color: #fff
</style>
