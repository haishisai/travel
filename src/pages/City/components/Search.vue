<template>
  <div class="box">
    <input
      type="text"
      placeholder="输入城市或拼音"
      v-model="kewWord"
    >
    <div
      class="content"
      v-show="contentKey"
      ref="wrapper"
    >
      <ul>
        <li
          class="border-bottom"
          v-for="item of listData"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// 滚动 引入  使用 this.scroll = new Bscroll(this.$refs.wrapper, { pullUpLoad: true })
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      kewWord: '',
      listData: [],
      contentKey: false,
      timer: null
    }
  },
  props: [
    'items'
  ],
  methods: {
    showKeyWord () {
      let res = [];
      for (let key in this.items) {
        this.items[key].forEach(item => {
          if (item.spell.indexOf(this.kewWord) > -1 || item.name.indexOf(this.kewWord) > -1) {
            res.push(item)
          }
        });
      }
      if (res.length === 0) {
        let obj = {}
        obj.name = "您搜索的地方不存在"
        res.push(obj)
      }
      this.listData = res
    },
    handleCityClick (e) {
      // this.$store.dispatch('changeCity', e)
      this.$store.commit('changeCity2', e)
      this.$router.push({name:'Home'})
    }
  },
  watch: {
    kewWord () {
      if(this.timer){
        clearTimeout(this.timer)
      }
      //函数节流 
      this.timer = setTimeout(() => {
        if (this.kewWord == '') {
          this.contentKey = false
        } else {
          this.contentKey = true
        }
        this.showKeyWord()
      },100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      pullUpLoad: true,
      click: true
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  background-color $bgColor
  height 0.5rem
  padding 0 0.1rem 0.1rem
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
    bottom 0
    top 1.36rem
    overflow hidden
    .border-bottom
      &:before
        border-color #777
    li
      padding 0.2rem
      background #fff
</style>

