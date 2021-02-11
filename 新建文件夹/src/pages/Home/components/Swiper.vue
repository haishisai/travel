<template>
  <div class="wrapper" v-if="swiperData.length" >
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item of swiperData"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.url"
          alt
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <!-- 左右箭头
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!-- 下方滚动条
      <div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "homeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, //    拖動 就自動播放 swiper4
        },
        // autoplayDisableOnInteraction: false   拖動 就自動播放 swiper3
      }
    };
  },
  props:{
    swiperData: Array
  },
  mounted(){
    
  }
};
</script>
<style lang="stylus" scoped>
// 穿透   css 在下个插件里
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper
  // 容器获得图片高度 通栏图片
  width: 100%
  height: 0
  padding-bottom: 29%
  overflow: hidden // 预防规格外的图片
  .swiper-img
    width: 100%
</style>