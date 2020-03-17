<template>
    <div>
        <Header />
        <Search :items="cities" />
        <ToHome />
        <!--hotCities:热门城市数据  Cities:城市列表数据     -->
        <CityList :hotItems="hotCities" :items="cities" :city="city" :zmbChange="zmbChange" />
        <Alphabet :items="cities" @change="change" />
    </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
import ToHome from '@/components/app/ToHome.vue'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import CityList from './components/CityList.vue'
import Alphabet from './components/Alphabet.vue'
export default {
    name: 'list',
    data () {
      return {
        hotCities: [],
        cities: {},
        nCity:'',
        zmbChange: ''
      }
    },
    components: {
        ToHome,
        Header,
        Search,
        CityList,
        Alphabet
    },
    props:['city'],
    methods: {
      getCityInfo () {
        axios.get('/dist/mock/city.json')
        .then(this.getCityInfoSucc)
        .catch(this.getCityInfoErr)
      },
      getCityInfoSucc (res) {
        res = res.data
        if(res && res.ret === true){
          const data = res.data
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        }
      },
      getCityInfoErr (err) {
        console.log('err from getCityInfo'+ err )
      },
      change (e) {
        this.zmbChange = e
      }
    },
    mounted () {
      this.getCityInfo()
      
    }
}
</script>

