<template>
  <div class="expoertContainer">
    <TopicHeader>
      <span slot="topic" :class="{on:$route.path==='/topic'}" @click="$router.push('/topic')">发现</span>
      <span slot="expert" @click="$router.push('/expert')" :class="{on:$route.path==='/expert'}">甄选家</span>
    </TopicHeader>
    <div class="exportContent">
      <div class="exportSwiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/c2bda92d5b9ad327f0b9caf30c49206c.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/yx-topic-1560503154393gs97xgld.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import TopicHeader from '../../components/TopicHeader/TopicHeader'
  export default {
    components: {
      TopicHeader
    },
    mounted () {
      new Swiper('.swiper-container',{
        loop: true,
         slidesPerView: "auto",
        // loopedSlides: _this.bannerList.length,
        speed: 1000,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2500
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .expoertContainer
    background #f4f4f4
    .exportContent
      padding-top 100px
      box-sizing border-box
      .exportSwiper
        border-top 2px solid #d9d9d9
        height 420px
        .swiper-container
          background #fff
          padding 20px 40px
          .swiper-wrapper
            .swiper-slide
              margin-right 20px
              a
                img 
                  height 372px
                  width 670px
                  border-radius 10px

            
</style>
