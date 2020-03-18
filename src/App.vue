<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
    <router-view />
    <NaviBar
      v-show="NaviBarKey"
      :NaviBarShow="NaviBarKey"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import NaviBar from "./components/app/NaviBar.vue";
export default {
  name: 'index',
  components: {
    NaviBar
  },
  data () {
    return {
      NaviBarKey: true,
    }
  },
  methods: {

  },
  created () {

  },
  // mounted () {
  //   // this.globalClick(this.pdclick)
  //   // 全局点击的绑定
  // },
  watch: {
    '$route.path': function (newVal) {
      //里面有路由的信息，根据路由信息做相关处理            
      if (newVal == '/list') {
        this.NaviBarKey = false;
      } else {
        this.NaviBarKey = true;
      }
    }
  },
}
</script>
<style>
</style>
