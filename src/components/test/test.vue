<template>
    <div class="hospital-info">
      <div 
      @mouseenter="mouseenter" 
      @mouseleave="mouseleave"  
      class="box" 
      ref="abc" 
      v-bind:class="{ big : ifshow }" 
      ></div>
      <goHome />
    </div>
</template>
<script>
    // @ is an alias to /src
    import goHome from '@/components/app/goHome.vue'
    export default {  
        name: 'test',
        components: {
            goHome
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
   
</style>