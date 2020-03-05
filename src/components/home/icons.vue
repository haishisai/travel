<template>
  <div class="icons-box">
    <swiper :options="swiperOption1">
      <swiper-slide v-for="(msg,index) of pages" :key="index">
        <div class="icon" v-for="item of msg" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="icon-txt">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      swiperOption1: {
        pagination: {
          // el: '.swiper-pagination',
          // clickable: true
        },
        loop: false,
        autoplay: false
      },
      iconList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        desc: "一日游"
      }, {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        desc: "景点门票"
      }, {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
        desc: "上海迪斯尼"
      }, {
        id: "0004",
        imgUrl: "https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png",
        desc: "上海海昌"
      }, {
        id: "0005",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/9480e99a101564a22dfff0c4b9d0861c.png",
        desc: "上海杜莎"
      }, {
        id: "0006",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
        desc: "错峰出游"
      }, {
        id: "0007",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
        desc: "温泉滑雪温泉滑雪温泉滑雪"
      }, {
        id: "0008",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
        desc: "黄浦江游船"
      }, {
        id: "0009",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
        desc: "test"
      }]
    }
  },
  computed: {
    pages () {
      var pages = []
      this.iconList.forEach((item, index) => {
        var page = Math.floor(index / 8)
        //如果pages 第一项没有数据，则赋值一个空数组
        if (!pages[page]) {
          pages[page] = []
        }
        //push 进的 pages 的第n项
        pages[page].push(item)
      })
      return pages
    }
  },
  // created () {
  //         console.log(111)
  // }
  mounted () {
    // console.log(this.pages)
  }
}
</script>
<style lang="stylus" scoped>
.icons-box >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons-box {
  height: 0;
  padding-bottom: 50%;
  // 100% 对应通栏宽度
  overflow: hidden;

  // background-color: #232323
  .icon {
    height: 0;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    // background :red
    // overflow:hidden
    .icon-img {
      // background:blue
      width: 75%;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }

    .icon-txt {
      // background:green
      text-align: center;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>