<template>
  <div class="box">
    
    <!-- <p>
      <button onclick="offset-=0.1">微调-0.1</button>
      <button onclick="offset+=0.1">微调+0.1</button>
    </p> -->
    <div class="header" >
      <div class="song-btn" @click="showSongList()" >歌曲列表</div>
      <div class="lrc-btn" @click="showSrc()" >歌词</div>
    </div>

    <ul class="song-list" v-show="showKey == 1" >
      <li v-for="(item, index) of songData" 
        @click="changeSong(item.src)"
        :key="index" 
      >
        {{item.name}}  
      </li>
    </ul>


    <div class="lrc-box" v-show="showKey == 2" >
      <ul class="lrc" :style="{ top: lrcTop + 'rem' }">
        <li
          v-for="(item,index) of items "
          :key="index"
          :class="{active : index == lrcWordIndex }"
        >
          {{item.words}}
        </li>
      </ul>
    </div>

    <div class="controller">
      <audio
        id="ad"
        :src="`/dist/media/${songName}.mp3`"
        ref="audio"
        controls
        loop
      ></audio>

    </div>
  </div>
</template>
<script>
import lrc from './lrc.js'
import axios from 'axios'
export default {
  name: 'MusicPlayerMain',
  data () {
    return {
      items: [],
      lrcTop: 4,
      ltcTopDefault: 4,
      lrcWordIndex: 0,
      songName: 'nndj',
      showKey: 1,
      songData: []
    }
  },
  methods: {
    getLrc () {
      // let lrc = require('./')
      this.items = lrc
    },
    getLrcIndex () {
      let audio = this.$refs.audio
      let l = this.items.length
      audio.addEventListener('timeupdate',() => {
        let time = audio.currentTime // 当前播放的时间
        for (let i = 0; i < l; i++) {
          if (this.items[i].time > time) {
            this.changeLrc(i)
            this.lrcWordIndex = i-1
            return 
          }
        }
      })
    },
    changeLrc (i) {
      this.lrcTop = -0.5 * i + this.ltcTopDefault
    },
    getSongInfo () {
      axios.get('/dist/mock/music.json')
      .then(this.getSongInfoSucc)
      .then(this.getLrcInfo)
      .catch(this.getSongInfoErr)
    },
    getSongInfoSucc (res) {
      this.songData = res.data.data
    },
    // 获取歌词
    getLrcInfo () {
      let newArr = this.songData.filter((item) => {
        return item.src == this.songName
      })
      axios.get('/dist/mock/'+ newArr[0].lrcSrc +'.json')
      .then(this.getLrcInfoSucc)
      .catch(this.getLrcInfoErr)
    },
    getLrcInfoSucc (res) {
      var newLrc = lrc(res.data.data[0].lrc)
      this.items = newLrc
      // 有了歌词后 才能动画歌词
      this.getLrcIndex()
    },
    // 换歌
    changeSong (e) {
      this.songName = e
      console.log(e)
      let audio = this.$refs.audio
      setTimeout(()=>{
        audio.play()
      },0)
      //换歌词
      this.getLrcInfo()
    },
    showSongList(){
      this.showKey = 1
    },
    showSrc(){
      this.showKey = 2
    }
  },
  watch: {

  },
  mounted () {
    this.getSongInfo()
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
  color #fff
  .song-list
    li
      background #BC2A2A
      margin .1rem
      height .8rem
      line-height .8rem
      padding 0 0 0 .2rem
  .header
    display flex
    padding .1rem
    div
      flex 1
      color #fff
      text-align center
      background #B82525
      height 1rem
      line-height 1rem
      margin .1rem
  .controller
    position fixed
    z-index 100
    bottom 1rem
    width 100%
    audio
      font-size 0.2rem
      margin 0 auto
      width 80%
      margin 0 10%
  .lrc-box
    position relative
    width 98%
    margin 0.5rem auto
    height 12rem
    overflow hidden
    .lrc
      position absolute
      width 100%
      transition all .8s linear
      // top -1rem
      li
        text-align center
        color #fff
        font-size 0.32rem
        margin 0.2rem
        height 0.3rem
        line-height 0.3rem
      .active
        color red
</style>

