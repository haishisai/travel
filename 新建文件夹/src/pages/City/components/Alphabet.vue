<template>
  <div class="box" ref="box" >
    <ul>
      <li 
        :class="{active : item == activeKey}"
        v-for=" item of zmArr" 
        :key="item"
        @click="handleClick"
        @touchstart="handleTouchStart" 
        @touchmove="handleTouchMove" 
        @touchend="handleTouchEnd" 
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Alphabat',
  props: {
    items : Object
  },
  data () {
    return {
      touchStatus: false,
      activeKey: '',
      timer: null //节流用
    }
  },
  computed: {
    zmArr () {
      const arr = []
      for (let i in this.items) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    handleClick (e) {
      // console.log(e.target.innerText)
      this.changeZ(e.target.innerText)
    },
    // 抛出事件
    changeZ (e) {
      this.$emit('change' ,e)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // e.stopImmediatePropagation()  // 移动 触摸 阻止冒泡？ 没用
      const h = this.$refs['box'].getElementsByTagName('li')[0].offsetHeight
          // 距离上层容器的距离
          const startY = this.$refs['box'].offsetTop
          const touchY = e.touches[0].clientY
          const index = Math.floor( (touchY - startY) / h ) 
          this.activeKey = this.zmArr[index]
          this.changeZ(this.activeKey)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  position absolute
  z-index 100
  right 0.1rem
  top 2.5rem
  ul
    li
      color $bgColor
      // background red
      width .5rem
      padding-left .3rem
      height .4rem
      line-height .4rem
      font-size .32rem
      text-align center
    // .active
    //   font-size .5rem
</style>

