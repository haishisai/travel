<template>
    <div class="hospital-info">
      <span>其他</span>
      <div 
      @mouseenter="mouseenter" 
      @mouseleave="mouseleave"  
      class="box" 
      ref="abc" 
      v-bind:class="{ big : ifshow }" 
      ></div>
      <ToHome />
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
   
</style>