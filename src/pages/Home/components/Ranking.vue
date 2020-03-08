<template>
  <div>
    <swiper
      :options="swiperOption"
      class="content"
    >
      <swiper-slide>
        <img
          class="s-img"
          src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="s-img"
          src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="s-img"
          src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg"
          alt=""
        >
      </swiper-slide>
      <div class="swiper-scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Ranking',
  data () {
    return {
      swiperOption: {
        // freeMode: true,       
        
      },
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  width: 200%
  .s-img
    width: 6rem
</style>