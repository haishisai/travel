<template>
  <div>
    <ul>
      <li
        v-for="item in items"
        :key="item.EnName"
      >
        <img
          :src="item.EnName"
        >
        <p>{{item.CnName}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      items:[]
    }
  },
  methods: {
    getData (e) {
      
      let data = e.data.obj
      this.items = data
      this.items.map(e => {
        try {
          e.EnName = require(`../../../src/assets/img/${e.EnName}.png`);
        } catch(err) {
          console.log("londingImages:" + err)
        }
        
      })
      console.log(this.items)
    }
  },
  mounted () {
    axios.get("http://localhost:3000/flowers")
      .then((res) => {
        this.getData(res)
      })
      .catch((err) => {
        console.log('错误' + err)
      });
  }

}
</script>
<style lang="stylus" scoped></style>