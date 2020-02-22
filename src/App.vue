<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
    <router-view />
    <div v-on:click="aaa">test</div>
  </div>
</template>
<script>

export default {
  name: 'aaa',
  methods: {
    aaa: function () {
      console.log("首页test")
    }
  },
  created () {
    //  this.aaa()
  }
}
</script>
<style>
</style>
