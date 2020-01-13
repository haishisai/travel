<template>
  <div class="home">
    <homeHeader></homeHeader>


    
    <div id="test" >
      <router-link to="./list">跳转 从home 路由到 list.vue →  list_part1.vue 只是一个部件</router-link>
      <br>
      <router-link to="./test">test page</router-link>
      <br>
      <router-link to="./test2">test page2 band</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '../components/header.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    homeHeader: homeHeader
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted (){
    this.getHomeInfo()
  }
}
</script>
