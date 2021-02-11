<template>
  <div class="box" ref="wrapper" >
    
    <div>
      <!-- now city -->
      <div class="now-city">
        <div class="title" >当前城市</div>
        <ul class="ul-block border-topbottom">
          <li>
            <span :class="{ red : redKey }" >{{this.$store.state.city.city}}</span>
          </li>
        </ul>
      </div>
      <!-- hot city -->
      <div class="hot-city">
        <div class="title" >热门城市</div>
        <ul class="ul-block border-topbottom">
          <li 
            v-for="hotItem of hotItems" 
            :key="hotItem.id"  
            class="hot-city-li" 
            @click="handleCityClick(hotItem.name)"
          >
            <!-- 这方法ok 再学习新的方法 -->
            <!-- <router-link :to="{ name : 'Home' }" >
              <span>{{hotItem.name}}</span>
            </router-link> -->

            <span>{{hotItem.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 城市列表区域 -->
      <div class="py" v-for="(item, key) of items" :key="item.id" :ref="key" >
        <div class="title" >{{key}}</div>
        <ul class="ul-line ">
          <li 
            class="hot-city-li border-bottom" 
            v-for="innerItem of item" 
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >

            <span>{{innerItem.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Bscroll from 'better-scroll'

export default {
    name: 'CityList',
    data () {
      return {
        redKey : false
      }
    },
    props: {
      items: Object,
      hotItems: Array,
      zmbChange: String,
    },
    methods: {
      handleCityClick (e) {
        // this.redKey = !this.redKey
        // this.$store.dispatch('changeCity', e)
        this.$store.commit('city/changeCity2', e )
        // this.$router.push('/') 地址传参
        this.$router.push({name:'Home'})
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        pullUpLoad:true,
        //better-scroll，默认它会阻止touch事件
        click: true
      })
    },
    watch:{
      zmbChange (newValue) {
        if (newValue) {
          const element = this.$refs[newValue][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  position absolute
  z-index 1
  bottom 0
  top 1.36rem
  left 0
  right 0
  .red
    color red
  // background red
  // overflow-y scroll //  其实这样也行 学习新东西
  overflow hidden
  .title
    background #ECECEC
    height .3rem
    padding .1rem
  .border-topbottom
    &:before
      border-color #666
    &:after
      border-color #666
  .ul-block
    display flex
    flex-wrap wrap
    justify-content flex-start
    padding .1rem 
    li
      font-size .3rem
      padding .2rem .7rem
      margin .1rem 
      text-align center
      border 1px solid #ccc
  .ul-line
    .border-bottom
      &:before
        border-color #777
    li
      padding .2rem
</style>

