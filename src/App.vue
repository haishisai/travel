<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
    <router-view @page-change="console.log(11)" />
    <div v-on:click="aaa">index click test</div>
    <bar v-show = "barKey" :barShow="barKey" ></bar>
  </div>
</template>
<script>
// @ is an alias to /src
import bar from "./views/bar.vue";
export default {
  name: 'index',
  components:{
      bar
  },
  data () {
      return {
          barKey : true
      }
  },
  methods: {
    aaa: function () {
      console.log("首页test")
    },
    pdclick: function(){
        // console.log('pd')
    }
  },
  created () {
    
  },
  mounted () {
      this.globalClick(this.pdclick)
      // 全局点击的绑定
  },
  watch: {
        '$route.path': function(newVal) {
            //里面有路由的信息，根据路由信息做相关处理
            
            if(newVal == '/list'){
                this.barKey = false;
            }else{
                this.barKey = true;
            }
        }
  },
}
</script>
<style>
</style>
