<template>
  <div class="home">
    <homeHeader></homeHeader>
    <home-swiper></home-swiper>
    <home-icons></home-icons>

    
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from "../components/home/header.vue";
import homeSwiper from "../components/home/swiper.vue";
import homeIcons from "../components/home/icons.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    homeHeader: homeHeader,
    //可以直接写个变量名注册  效果  aaa1 ：aaa 一样
    homeSwiper,
    homeIcons
  },
  methods: {
    getHomeInfo () {
    //   axios.get("/api/index.json").then(this.getHomeInfoSucc);
      axios.get("http://yuanjin.tech:5005/api/movie?page=1&limit=3").then(this.getHomeInfoSucc);
    },
    // getHomeInfoSucc (res) {
    // //   console.log(res);
    // },
  },
  
  mounted () {
    this.getHomeInfo();
  }
};
</script>
<style lang="stylus" scoped>















// .home-swiper















//   transform:translate(0,-173%)















// .home-icons















//   transform:translate(0,55%)















</style>
