<template>
  <div class="topicCardContainer">
    <div v-for="(item, index) in newTopicCarts.length?newTopicCarts:topics" :key="index">
      <div class="cardContainer" v-if="item.style===1">
        <div class="cardTitle">
          <span class="avater">
            <img :src="item.avatar">
          </span>
          <span>{{item.nickname}}</span>
        </div>
        <div class="cardContent">{{item.title}}</div>
        <img class="bigPic" :src="item.picUrl">
        <span class="iconItem">
          <i class="iconfont icon-yanjing"></i>
          <span>{{(item.readCount*1)<=10000?item.readCount:(Math.round(item.readCount/10000)+'w')}}人看过</span>
        </span>
      </div>
      <div class="cardContainer" v-if="item.style===2">
        <div class="cardTitle">
          <span class="avater">
            <img :src="item.avatar">
          </span>
          <span>{{item.nickname}}</span>
        </div>
        <div class="topicContent">{{item.title}}</div>
        <span class="subTitle" >{{item.subTitle}}</span>
        <span class="iconItem">
          <i class="iconfont icon-yanjing"></i>
          <span>{{(item.readCount*1)<=10000?item.readCount:(Math.round(item.readCount/10000)+'w')}}人看过</span>
        </span>
        <div class="smallPic">
          <img :src="item.picUrl">
        </div>
      </div>
      <div class="cardContainer" v-if="!item.style">
        <div class="cardTitle">
          <span class="avater">
            <img :src="item.avatar">
          </span>
          <span>{{item.nickname}}</span>
        </div>
        <div class="cardContent">{{item.content}}</div>
        <img class="ratePic" :src="item.lookPics?item.lookPics[0].picUrl:''">
        <span class="iconItem">
          <i class="iconfont icon-yanjing"></i>
          <span>{{(item.readCount*1)<=10000?item.readCount:(Math.round(item.readCount/10000)+'w')}}人看过</span>
        </span>
      </div>
      <!-- <div class="cardContainer">
        <div class="cardContent">新年=贴膘</div>
        <div class="topicSwiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/00ccc13879e46cae74ebb689ebb72496.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/7e146e4a8d7497175deb0d99e45b2f59.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/7e146e4a8d7497175deb0d99e45b2f59.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/7e146e4a8d7497175deb0d99e45b2f59.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {reqTopics} from '../../../api/index'
  export default {
    props: {
      page: Number,
      newCards: Array
    },
    data () {
      return {
        topicsResult: [],
        topics: [],
        size: 5
      }
    },
    async mounted(){
      const result = await reqTopics(this.page, this.size)
      if (result.code==='200') {
        this.topicsResult = result.data.result
        let topic = []
        for (let i = 0; i < this.topicsResult.length; i++) {
          if(this.topicsResult[i].look){
            topic = topic.concat(this.topicsResult[i].look)
          }
          topic = topic.concat(this.topicsResult[i].topics)
        }
        this.topics = topic.flat()
      }
      console.log(this.topics)
      new Swiper('swiper-container', {
        slidesPerView: "auto",
        // loopedSlides: _this.bannerList.length,
        speed: 1000,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2500
        }
      })
    },
    computed: {
      newTopicCarts() {
        this.topics = this.topics.concat(this.newCards)
        return this.topics
      }
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicCardContainer
    .cardContainer
      background-color #fff
      position relative
      display flex
      padding 30px 30px 20px
      box-sizing border-box
      flex-direction column
      margin-bottom 20px
      .cardTitle
        height 56px
        font-size 28px
        color #333
        line-height 56px
        margin-bottom 10px
        span 
          display inline-block
          vertical-align middle
        .avater
          border-radius 50%
          width 54px
          height 54px
          overflow hidden
          margin-right 5px
          img 
            width 54px
            height 54px
      .cardContent
        max-height 100px
        min-height 64px
        line-height 50px  
        font-size 36px
        margin 12px 0
        color #333
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
      .bigPic 
        height 376px
        width 690px  
        border-radius 10px  
        margin-bottom 25px
      .iconItem
        color #999
        font-size 26px
        transform scale(0.9)
        transform-origin 0 0
        .iconfont
          color #bbb
          font-size 30px
      .topicContent
        height 120px
        line-height 50px  
        font-size 36px
        padding 12px 0
        box-sizing border-box
        color #333
        width 400px
        overflow hidden
      .subTitle
        font-size 28px
        color #7f7f7f
        padding-bottom 20px
        width 400px 
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .smallPic
        position absolute 
        top 30px
        right 30px
        height 272px 
        width 272px
        overflow hidden
        border-radius 14px
        img 
         height 272px
         position absolute
         top 0
         left -109px
      .ratePic
        width 690px
        margin-bottom 30px
        border-radius 10px
      .topicSwiper
        height 272px
        .swiper-container
          background #fff
          padding 0 200px 
          box-sizing border-box
          .swiper-wrapper
            .swiper-slide
              margin-right 20px
              a
                display inline-block
                img 
                  height 272px
                  width 272px
                  border-radius 10px
</style>
