<template>
  <dl class="box">
    <dt>
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </dt>
    <dd v-for="(item,index) of items" :key="index">
      <div class="content">
        <div class="pic">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="desc">
          <div class="title">{{item.title}}</div>
          <div class="posts">
            <span>星星插件</span>
            <span class="number">{{item.postNumber}}条评论</span>
          </div>
          <div class="line3">
            <div class="price">
              <span class="price-1" >¥</span>
              <span class="price-2">{{item.price}}</span>
              <span class="price-3">起</span>
            </div>
            <div class="area">{{item.area}}</div>
          </div>
          <div class="txt">{{item.txt}}</div>
        </div>
      </div>
      <div class="line border-top"></div>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'Recommend',
  props:{
    items: Array
  }
}
</script>
<style lang="stylus" scoped>
.box
  dt
    padding-left: .2rem
    margin-top: .2rem
    img
      width: .3rem
      height: .3rem
      margin-top: -0.07rem
    span
      margin-left: .1rem
  font-family: Arial, 'Microsoft Yahei', 'Helvetica Neue', Helvetica, sans-serif
  .content
    overflow: hidden
    width: 100%
    height: 3.2rem
    // background-color: lightyellow
    display: flex
    .pic
      img
        width: 2rem
        height: 2rem
        margin: 0.2rem
    .desc
      flex: 1
      .title
        font-size: 0.35rem
        margin-top: 0.5rem
      .posts
        margin-top: 0.3rem
        span
          display: inline-block
        .number
          margin-left: 0.1rem
      .line3
        display: flex
        margin-top: 0.4rem
        div
          flex: 1
        .area
          text-align: right
          margin-right: 0.2rem
        .price
          span
            color: #FF8300
          .price-2
            font-size: .4rem
          .price-3
            color: #232323
      .txt
        margin-top: 0.4rem
        color: red
  .line
    margin-left: .2rem
 



</style>