<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper />
    
    <HomeIcons />
    <Ranking />
    <Recommend />
    <WhereGo />
    
    <div style="height:30px" ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
import Ranking from "./components/Ranking.vue";
import WhereGo from "./components/WhereGo.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    WhereGo,
    Ranking
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
