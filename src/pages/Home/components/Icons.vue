<template>
  <div class="icons-box">
    <swiper :options="swiperOption1" v-if="iconsData.length" >
      <swiper-slide
        v-for="(msg,index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of msg"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              :src="item.imgUrl"
              alt
            />
          </div>
          <div class="icon-txt">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      swiperOption1: {
        pagination: {
          // el: '.swiper-pagination',
          // clickable: true
        },
        loop: false,
        autoplay: false
      },
    }
  },
  props:{
    iconsData: Array
  },
  computed: {
    pages () {
      var pages = []
      this.iconsData.forEach((item, index) => {
        var page = Math.floor(index / 8)
        //如果pages 第一项没有数据，则赋值一个空数组
        if (!pages[page]) {
          pages[page] = []
        }
        //push 进的 pages 的第n项
        pages[page].push(item)
      })
      return pages
    }
  },
  // created () {
  //         console.log(111)
  // }
  mounted () {
    // console.log(this.pages)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons-box >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons-box
  height: 0
  padding-bottom: 50%
  // 100% 对应通栏宽度
  overflow: hidden
  // background-color: #232323
  .icon
    height: 0
    float: left
    width: 25%
    padding-bottom: 25%
    // background :red
    // overflow:hidden
    .icon-img
      // background:blue
      width: 75%
      margin: 0 auto
      img
        width: 100%
    .icon-txt
      // background:green
      text-align: center
      font-size: .30rem
      height: .32rem
      line-height: .32rem 
      color: #333
      ellipsis()
</style>