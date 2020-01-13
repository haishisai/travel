<template>
  <div class="home">
    <homeHeader></homeHeader>
    <home-swiper></home-swiper>

    <div id="test">
      <router-link to="./list">跳转 从home 路由到 list.vue → list_part1.vue 只是一个部件</router-link>
      <br />
      <router-link to="./test">test page</router-link>
      <br />
      <router-link to="./test2">test page2 band</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from "../components/header.vue";
import homeSwiper from "../components/swiper.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    homeHeader: homeHeader,
    //可以直接写个变量名注册  效果  aaa1 ：aaa 一样
    homeSwiper
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
