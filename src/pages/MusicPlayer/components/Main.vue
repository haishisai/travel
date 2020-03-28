<template>
  <div class="box">
    <div class="controller" >
      <audio
        id="ad"
        src="../../../assets/media/1.mp3"
        ref="audio"
        controls
        loop
      ></audio>
    </div>
    <p>
      <button onclick="offset-=0.1">微调-0.1</button>
      <button onclick="offset+=0.1">微调+0.1</button>
    </p>
    <div class="lrc-box" >
      <ul class="lrc">
        <li v-for="(item,index) of items " :key="index" >
          {{item.words}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import lrc from '../../../assets/media/lrc.js'
console.log(lrc)
export default {
  name: 'MusicPlayerMain',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getLrc () {
      this.items = lrc
    },
    aaa () {
      let audio = this.$refs.audio
      audio.ontimeupdate = function () {
        console.log(1)
      }
    }
  },
  watch: {

  },
  mounted () {
    this.getLrc()
    this.aaa()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  background #333
  position absolute
  z-index 1
  top 0
  left 0
  right 0
  bottom 0
  .controller
    position fixed
    bottom 1rem
    width 100%
    audio
      font-size .2rem
      margin 0 auto
      width 80%
      margin 0 10%
  .lrc-box
    position relative
    width 98%
    margin .5rem auto
    height 12rem
    overflow hidden
    .lrc
      position absolute
      width 100%
      // top -1rem
      li
        text-align center
        color #fff
        font-size .32rem
        margin .2rem
</style>

