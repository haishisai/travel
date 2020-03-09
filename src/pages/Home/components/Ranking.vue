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
      items: [
        {
          id: '1',
          img: 'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
          txt: '东方明珠',
          price: '123',
        },
        {
          id: '2',
          img: 'https://imgs.qunarzz.com/sight/p0/2001/f6/f66fb64d494a4d78a3.img.jpg_250x250_434440d2.jpg',
          txt: '上海海昌海洋公园',
          price: '111'
        },
        {
          id: '3',
          img: 'https://imgs.qunarzz.com/sight/p0/201310/08/fde0fbd156f10f40c8d65eac.jpg_250x250_9cdb90f5.jpg',
          txt: '上海人民广场',
          price: '12'
        },
        {
          id: '4',
          img: 'https://imgs.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
          txt: '黄浦江游览（十六铺码头）',
          price: '233'
        },
        {
          id: '5',
          img: 'https://imgs.qunarzz.com/sight/p0/2001/e1/e113dd96c55c1f2ba3.img.jpg_250x250_4d1215da.jpg',
          txt: '上海野生动物园',
          price: '12.31'
        },
        {
          id: '6',
          img: 'https://imgs.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
          txt: '上海杜莎夫人蜡像馆',
          price: '121'
        }
      ],
      repair:{
        id: '00abdfer123',
        txt: '',
        price: ''
      },
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar',
          // hide: true,
        },
        freeMode: true,
        spaceBetween: 0,
        slidesPerView: 3.8
      }
      
    }
  },
  methods:{
    rankIcon () {
      for(let i=0;i<3;i++){
        this.items[i].iconShow = true
        this.items[i].IconUrl = require(`../../../assets/img/rank${i+1}.png`)
      }
    }
  },
  created () {
    this.rankIcon()
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