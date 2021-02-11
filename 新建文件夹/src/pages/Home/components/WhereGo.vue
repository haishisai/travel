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
  props: {
    items: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .box
    .title
      height: .8rem
      line-height: .85rem
      width: 100%
      background-color: #F5F5F5
      padding-left: .3rem
      font-size: .3rem
    .content
      // margin-top: .1rem 
      img
        width: 100%
      .content-t
        margin: .2rem .2rem .1rem 
        font-size: .24rem
      .content-desc
        margin: .1rem .2rem .1rem 
        height: .24rem
        line-height: .24rem 
        font-size: .20rem
        color: #616161
        ellipsis()
</style>