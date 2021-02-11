<template>
  <div>
    <div class="title">
      <img class="icon-hot" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span class="txt" >
        本周热门榜单
      </span>
      <span class="more">全部榜单 ></span>
    </div>
    <swiper :options="swiperOption" class="content">
      <swiper-slide v-for="item of items" :key="item.id" >
        <div class="item" >
          <img class="rank-icon" v-show="item.iconShow" :src="item.IconUrl" alt="">
          <img
          class="s-img"
          :src="item.img"
          alt=""
          >
          <div class="txt" >{{item.txt}}</div>
          <div class="price">
              <span class="price-1" >¥</span>
              <span class="price-2">{{item.price}}</span>
              <span class="price-3">起</span>
          </div>
        </div>
        
      </swiper-slide>
      
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar" ></div>
    </swiper>
  </div>
</template>
<script>


export default {
  name: 'Ranking',
  data () {
    return {
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar',
          // hide: true,
        },
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: 3.8
      }
    }
  },
  props:{
    items: Array
  },
  methods:{
    rankIcon () {
      if(this.items.length==0){
        return
      }
      for(let i=0;i<3;i++){
        this.items[i].iconShow = true
        this.items[i].IconUrl = require(`../../../assets/img/rank${i+1}.png`)
      }
    }
  },
  watch:{
    '$props.items': function(){
      this.rankIcon()
    }
  },
  created () {
    
  },
  mounted () {
    
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content >>> .swiper-scrollbar
  width: 95%

.title
  display: flex
  justify-content: space-between
  padding: .2rem
  height: .5rem
  line-height: .5rem
  // space-evenly
  .txt
    font-size: .32rem
    flex: 1
  .icon-hot
    margin-top: 0.08rem
    margin-right: .1rem
    width: .3rem
    height .3rem
.content
  width: 100%
  padding-left: .1rem
  .item
    margin-top: 0.1rem
    width: 2.0rem
    height: 3.1rem
    position: relative
    .rank-icon
      position: absolute
      width: 1rem
      top: -.1rem
    .s-img
      width: 2.0rem
      height: 2.0rem
    .txt
      font-size: .2rem
      margin-top: .1rem
      text-align: center
      height: .25rem
      line-height: .25rem
      ellipsis()
    .price
      margin-top: .1rem
      text-align: center
      span
        color: #FF8300
      .price-2
        font-size: .3rem
      .price-3
        color: #232323
</style>