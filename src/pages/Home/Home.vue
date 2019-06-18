<template>
  <div class="homeContainer">
    <HomeHeader/>
    <div class="cateNav" >
      <div class="cateList-wapper">
        <ul class="cateList">
          <li :class="{on : type===1}" @click="changeCate(1)">推荐</li>
          <li :class="{on : type===2}" @click="changeCate(2)">居家生活</li>
          <li :class="{on : type===3}" @click="changeCate(3)">服饰鞋包</li>
          <li :class="{on : type===4}" @click="changeCate(4)">美食酒水</li>
          <li :class="{on : type===5}" @click="changeCate(5)">个护清洁</li>
          <li :class="{on : type===6}" @click="changeCate(6)">母婴亲子</li>
          <li :class="{on : type===7}" @click="changeCate(7)">运动旅行</li>
          <li :class="{on : type===8}" @click="changeCate(8)">数码家电</li>
          <li :class="{on : type===9}" @click="changeCate(9)">全球特色</li>
        </ul>
      </div>
      <div class="gradientWrap"></div>
      <span class="iconItem" @click="isShow = !isShow" :class="{change: isShow}">
        <i class="iconfont icon-xiala"></i>
      </span>
      <div class="allCates" :class="{show: isShow}">
        <span class="cateHeader">全部频道</span>
        <ul class="allCatesList">
          <li :class="{on : type===1}" @click="changeCate(1)">推荐</li>
          <li :class="{on : type===2}" @click="changeCate(2)">居家生活</li>
          <li :class="{on : type===3}" @click="changeCate(3)">服饰鞋包</li>
          <li :class="{on : type===4}" @click="changeCate(4)">美食酒水</li>
          <li :class="{on : type===5}" @click="changeCate(5)">个护清洁</li>
          <li :class="{on : type===6}" @click="changeCate(6)">母婴亲子</li>
          <li :class="{on : type===7}" @click="changeCate(7)">运动旅行</li>
          <li :class="{on : type===8}" @click="changeCate(8)">数码家电</li>
          <li :class="{on : type===9}" @click="changeCate(9)">全球特色</li>
        </ul>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <div>
              <img src="https://yanxuan.nosdn.127.net/a89606c3c2cde5ee374e073bae08af0d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <div>
              <img src="https://yanxuan.nosdn.127.net/60e4ba11fdb8320eda453427bf287639.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <div>
              <img src="https://yanxuan.nosdn.127.net/b97b16feb75f78121c8fab18ae85300c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <div>
              <img src="https://yanxuan.nosdn.127.net/a2b4bcc5a668b35a2820061022904fa8.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <div>
              <img src="https://yanxuan.nosdn.127.net/7fc841255b8e9b79243f1312949e5403.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="serviceList">
      <ul>
        <li>
          <span class="iconItem">
            <i class="iconfont icon-bangzhu"></i>
          </span>
          <span>网易自营品牌</span>
        </li>
        <li>
          <span class="iconItem">
            <i class="iconfont icon-anquan"></i>
          </span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span class="iconItem">
            <i class="iconfont icon-tuipiao"></i>
          </span>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>  
    <div class="imgNav">
      <ul class="imgNavList">
        <li class="imgNavItem" v-for="(item, index) in imgNavList" :key="index">
          <a :href="item.schemeUrl">
            <img :src="item.picUrl" alt="">
            <span>{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.css'
import HomeHeader from './Header/Header'
import {reqHomeData} from '../../api'

  export default {
    data () {
      return {
        type: 1,
        isShow: false,
        imgNavList: []
      }
    },
    components: {
      HomeHeader
    },
    methods: {
      changeCate (index) {
        const lis = document.querySelector('.cateList').children
        this.type = index
        this.scroll.scrollToElement(lis[index - 1], 500, -15)
      }
    },
    async mounted () {
      const result = await reqHomeData()
      if(result.code === 0){
        this.imgNavList = result.data.kingKongModule.kingKongList
      }
      this.scroll = new BScroll('.cateList-wapper', {
        scrollX: true,
        click: true
      })
      new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: "auto",
        // loopedSlides: _this.bannerList.length,
        speed: 500,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
      let swiperIcons = document.querySelector('.swiper-pagination').children
      for (let index = 0; index < swiperIcons.length; index++) {
        swiperIcons[index].style.width = 20 + 'px'
        swiperIcons[index].style.height = 3 + 'px'
        swiperIcons[index].style.borderRadius = 0
        swiperIcons[index].style.marginBottom = 7 +'px'
        swiperIcons[index].style.background = '#fff'
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeContainer
    width 100%
    .cateNav
      width 100%
      position relative
      .cateList-wapper
        width 648px
        overflow hidden
        .cateList
          height 60px
          width 1460px
          padding 0 12px
          box-sizing border-box
          li 
            height 60px
            float left
            font-size 28px
            padding 0 16px
            color #333
            text-align center
            line-height 60px
            margin-left 20px
            &.on
              box-sizing border-box
              border-bottom 4px solid #b4282d
              color #b4282d
      .gradientWrap
        height 100%
        width 60px
        background-image linear-gradient(90deg, rgba(0,0,0,0),rgba(255,255,255,1))
        position absolute
        top 0
        right 100px
      .iconItem 
        position absolute
        right 40px
        top 14px 
        z-index 6 
        transform rotate(0)
        transition 0.2s
        &.change
          transform rotate(180deg)
      .allCates
        height 0px
        overflow hidden
        position absolute
        top 0
        left 0
        background #fff
        padding-top 10px
        z-index 5
        &.show
          height 370px
        .cateHeader
          margin-left 30px
          font-size 28px
        .allCatesList
          margin-top 40px
          overflow hidden
          li
            float left
            width 300px
            height 104px
            background #FAFAFA
            margin-left 30px
            margin-right -150px
            margin-bottom -5px
            font-size 48px
            border 1px solid #ccc
            text-align center
            line-height 100px
            transform scale(0.5)
            transform-origin 0 0
            &.on
              color #b4282d
              border 1px solid #b4282d
    .swiper-container
      height 370px
      width 100%
      .swiper-wrapper
        height 100%
        width 100%
        .swiper-slide
          height 100%
          width 100%
          img
            height 100%
            width 100%
    .serviceList
      ul
        box-sizing border-box
        padding-right 28px
        height 72px
        display flex
        justify-content space-around
        align-items center
        li
          color #b4282d
          font-size 24px
          .iconItem
            .iconfont
              font-size 32px
    .imgNav 
      height 341px
      .imgNavList 
        .imgNavItem 
          margin 10px 20px
          float left
          width 110px
          height 156px
          text-align center
          img
            width 110px
            margin-bottom 10px
          span
            color #333

</style>
