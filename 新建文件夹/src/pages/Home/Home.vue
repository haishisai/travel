<template>
  <div class="home">
    <HomeHeader />
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
// import { mapState } from 'vuex'
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
      swiperData: [],
      iconsData: [],
      recommendData: [],
      whereGoData: [],
      rankingData: []
    }
  },
  computed: {
    // ...mapState(['city'])
    // city: function () {
    //   let str = 1222
    //   return str
    // }
    getDefaultCity () {
      const t1 = this.$store.state.city
      return t1
    },
    // city 这个单词不能用？？？ 找不到问题出在哪
    // city () {
    //   return 111
    // }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.getDefaultCity.city )
      .then(this.getHomeInfoSucc)
      .catch(this.getHomeInfoErr)
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
    getHomeInfoErr () {
      console.log('err from getHomeInfo')
    }
  },
  watch: {
    // '$data.city' : function() {
    //   this.postNowCity()
    // }
  },
  created () {
    
  },
  mounted () {
    this.getHomeInfo();
  }
  // mounted () {
  //   axios.get("http://localhost:3000/flowers")
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{
  //     console.log('错误'+err)
  //   });
  // }
};
</script>
<style lang="stylus" scoped>

</style>
