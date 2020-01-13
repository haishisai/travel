<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id"  >
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
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
        pagination:'.swiper-pagination',
        loop:true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [{
        id:"0001",
        url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8c458e9fe5b5f4575b1d7ec0489a9ff8.jpg_750x200_f0fbf511.jpg"
      },{
        id:"0002",
        url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/071210d83e8ab09d363446166db5d34e.jpg_750x200_41285396.jpg"
      },{
        id:"0003",
        url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/9c4bd16baa22bcd6810b714b225b5c33.jpg_750x200_95d6ad38.jpg"
      }]
    };
  }
};
</script>
<style lang="stylus" scoped>
//穿透   css 在下个插件里
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper {
  // 容器获得图片高度 通栏图片
  width: 100%;
  height: 0;
  padding-bottom: 29%;
  overflow: hidden;  //预防规格外的图片
  .swiper-img {
    width: 100%;
  }
}
</style>