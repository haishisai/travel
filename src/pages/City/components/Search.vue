<template>
  <div class="box">
    <input
      type="text"
      placeholder="输入城市或拼音"
      v-model="searchMsg"
    >
    <div class="content" >
      {{searchMsg}}
      <ul>
        <li  ></li>
      </ul>
      
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'CitySearch',
  data () {
    return {
      searchMsg: ''
    }
  },
  props: [
    'items'
  ],
  methods: {
    aaa () {
      for (let key in this.items){
        console.log(this.items[key])
      }
    }
  },
  watch: {
    items (n) {
      console.log(n)
      this.aaa()
    }
  }
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
  .content
    z-index 200
    position absolute
    background #EFEFEF
    left 0
    right 0
</style>

