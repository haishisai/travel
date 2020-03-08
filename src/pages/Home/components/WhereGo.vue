<template>
  <dl class="box" >
    <dt class="title" >
      周末去哪儿
    </dt>
  
    <dd v-for="(item,i) of items" :key="i" class="content">
      <img :src="item.img" alt="">
      <div class="content-t">{{item.t}}</div>
      <div class="content-desc">{{item.desc}}</div>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'WhereGo',
  data () {
    return {
      items: [
        {
          img: 'https://imgs.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          t: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },{
          img: 'https://imgs.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          t: '上海看花',
          desc: '这个好天气，一起去看花吧'
        },
        {
          img: 'https://imgs.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
          t: '上海城市观光',
          desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .box
    .title
      height: .7rem
      line-height: .7rem
      width: 100%
      background-color: #F5F5F5
      padding-left: .2rem
    .content
      // margin-top: .1rem 
      img
        width: 100%
      .content-t
        margin: .2rem
        font-size: .24rem
      .content-desc
        margin: .2rem
        font-size: .20rem
        color: #616161
        ellipsis()
</style>