<template>
    <div class="box">
      <ul>
        <li>
          <router-link :to="{name:'MusicPlayer'}" tag="span" >
            musicPlayer
          </router-link>
        </li>
        <li>
          <router-link to="/loadingimages" tag="span" >
            LoadingImages
          </router-link>
        </li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      <ToHome />
      <!-- <div 
      @mouseenter="mouseenter" 
      @mouseleave="mouseleave"  
      class="box" 
      ref="abc" 
      v-bind:class="{ big : ifshow }" 
      ></div> -->    
    </div>
</template>
<script>
    // @ is an alias to /src
    import ToHome from '@/components/app/ToHome.vue'
    export default {
        name: 'test',
        components: {
            ToHome
        },
        data () {
            return {
                ifshow : true
            }
        },
        methods:{
          mouseenter(){
            console.log(1)
          },
          mouseleave(){
            console.log(2)
          },
        },
        mounted(){
            // var abc = this.$refs.abc;
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
  ul
    display flex
    justify-content space-around
    flex-wrap wrap
    li
      background $bgColor
      width 3rem
      margin .3rem 0
      height 1.5rem
      line-height 1.5rem
      text-align  center
      color #fff
      border-radius .1rem
      font-size .4rem
</style>