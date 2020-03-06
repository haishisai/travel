<template>
  <div class="home">
    <homeHeader></homeHeader>
    <home-swiper></home-swiper>
    <home-icons></home-icons>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
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
