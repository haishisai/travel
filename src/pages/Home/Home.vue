<template>
  <div class="home">
    <HomeHeader :city="city" />
    <HomeSwiper :swiperData="swiperData" />
    <HomeIcons :iconsData="iconsData" />
    <Ranking :items="rankingData" />
    <Recommend :items="recommendData" />
    <WhereGo :items="whereGoData" />
    
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
  data () {
    return {
      city: '',
      swiperData: [],
      iconsData: [],
      recommendData: [],
      whereGoData: [],
      rankingData: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get("/dist/mock/index.json").then(this.getHomeInfoSucc);
      // axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc (res) {
      if(res.data && res.status === 200){
        let obj = ''
        if(typeof(res.data) === String ){
          obj = eval('('+res.data+')')
          // var obj = JSON.parse(res.data)  這個要求高 多逗號就報錯了
        }else{
          obj = res.data
        }
        this.city = obj.city;
        this.swiperData = obj.data.swiperData;
        this.iconsData = obj.data.iconsData;
        this.recommendData = obj.data.recommendData;
        this.whereGoData = obj.data.whereGoData;
        this.rankingData = obj.data.rankingData;
      }
    },
  },
  created () {
    this.getHomeInfo();
  },
  mounted () {
    // test
    // axios.get("http://localhost:3000/flowers")
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log('错误'+err)
    // });
  }
};
</script>
<style lang="stylus" scoped>

</style>
