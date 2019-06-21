<template>
  <div class="RecommendContainer">
    <ul class="sceneLightList">
      <li class="sceneLightItem" v-for="(item, index) in sceneLightList" :key="index">
        <a :href="item.styleItem.targetUrl" :style="`background:url(${item.styleItem.backgroundUrl});background-size: 100% 100%`">
          <div class="title">{{item.styleItem.title}}</div>
          <div class="desc">{{item.styleItem.desc}}</div>
          <img class="picUrl" :src="item.styleItem.picUrlList[0]" >
          <img class="picUrl" :src="item.styleItem.picUrlList[1]" >
        </a>
      </li>
    </ul>
    <div class="personalShop">
      <div class="personalShopTitle">私人订制</div>
      <div class="swiper-shopcontainers">
        <div class="swiper-container swiper-shop">
          <div class="swiper-wrapper">
            <ul class="swiper-slide">
              <li v-for="(item, index) in personalShopOne" :key="index">
                <a href="javascript:;">
                  <div class="goodPicUrl">
                    <img :src="item.primaryPicUrl">
                  </div>
                  <span class="goodName">{{item.name}}</span>
                  <span class="goodPrice">¥{{item.retailPrice}}</span>
                </a>
              </li>
            </ul>
            <ul class="swiper-slide">
              <li v-for="(item, index) in personalShopTwo" :key="index">
                <a href="javascript:;">
                  <div class="goodPicUrl">
                    <img :src="item.primaryPicUrl">
                  </div>
                  <span class="goodName">{{item.name}}</span>
                  <span class="goodPrice">¥{{item.retailPrice}}</span>
                </a>
              </li>
            </ul>
            <ul class="swiper-slide">
              <li v-for="(item, index) in personalShopThree" :key="index">
                <a href="javascript:;">
                  <div class="goodPicUrl">
                    <img :src="item.primaryPicUrl">
                  </div>
                  <span class="goodName">{{item.name}}</span>
                  <span class="goodPrice">¥{{item.retailPrice}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="swiper-pagination swiper-shopIcon"></div>
        </div>
      </div>
      
    </div>
    <div class="timeWraper">
      <Card :title="'限时购'">
        <span class="shopMore" slot="more">
          <span>更多</span>
          <span class="iconItem">
            <i class="iconfont icon-zhang"></i>
          </span>
        </span>
        <span class="shopTime" slot="time">
          <span class="time">{{hour}}</span>
          <span>:</span>
          <span class="time">{{min}}</span>
          <span>:</span>
          <span class="time">{{sec}}</span>
        </span>
      </Card>
      <div class="timeContent">
        <a href="javascript:;" v-for="(item, index) in flashSale" :key="index">
          <img :src="item.picUrl" alt="">
          <div class="price">
            <span class="activityP">
              <span>¥</span>
              <span>{{item.activityPrice}}</span>
            </span>
            <s>
              <span>¥</span>
              <span>{{item.originPrice}}</span>
            </s>
          </div>
        </a>
      </div>
    </div>
    <div class="timeWraper">
      <Card :title="'新品首发'">
        <span class="shopMore" slot="more">
          <span>更多</span>
          <span class="iconItem">
            <i class="iconfont icon-zhang"></i>
          </span>
        </span>
      </Card>
      <div class="timeContent">
        <a href="javascript:;" v-for="(item, index) in newItemList" :key="index">
          <img :src="item.primaryPicUrl" alt="">
          <div class="shopInfo">
            <span class="shopName">{{item.name}}</span>
            <span class="activityP">
              <span>¥</span>
              <span>{{item.counterPrice}}</span>
            </span>
          </div>
        </a>
      </div>
    </div>
    <div class="topicWraper">
      <Card :title="'专题精选'">
        <span class="shopMore" slot="more">
          <span>更多</span>
          <span class="iconItem">
            <i class="iconfont icon-zhang"></i>
          </span>
        </span>
      </Card>
      <div class="topicListWraper">
        <div class="topicList">
          <a :href="item.linkUrl" v-for="(item, index) in topicList" :key="index">
            <img :src="item.scenePicUrl" alt="">
            <div class="subtitle">{{item.title}}</div>
            <div class="topictitle">{{item.subtitle}}</div>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import Card from './Card/Card'
 
  export default {
    props: {
      sceneLightList:Array,
      personalShop: Array,
      flashSale: Array,
      newItemList: Array,
      topicList: Array
    },
    data () {
      return {
        h: '',
        m: '',
        s: ''
      } 
    },
    components: {
      Card
    },
    computed: {
      personalShopOne () {
        return this.personalShop.slice(0, 3)
      },
      personalShopTwo () {
        return this.personalShop.slice(3, 6)
      },
      personalShopThree () {
        return this.personalShop.slice(6, 9)
      },
      hour () {
        return this.h
      },
      min () {
        return this.m
      },
      sec () {
        return this.s
      }
    },
    mounted(){
      this.topicScroll = new BScroll('.topicListWraper', {
        scrollX: true,
        click: true,
        momentum: false
      })
      this.topicScroll.on('touchEnd',(pos)=>{
        
        if(Math.abs(pos.x) >= 135 && Math.abs(pos.x) < 370 && pos.x <= 0 ) {
          this.topicScroll.scrollTo(-255, 0, 500)
        } else if(Math.abs(pos.x) < 135 && pos.x <= 0) {
          this.topicScroll.scrollTo(0, 0, 500)
        }
      })
      
      const timeId = setInterval(()=>{
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = new Date("2019-06-22 23:23:23");
        var end = endDate.getTime();
        //时间差
        var leftTime = end - now;
        const toZero = function (mun){
          if(mun<10){
              mun = "0"+mun;
          }else{
              mun = ""+mun;
          }
          return mun;
        }
        //定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
            const d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            this.h = toZero(Math.floor(leftTime / 1000 / 60 / 60 % 24)+d*24);
            this.m = toZero(Math.floor(leftTime / 1000 / 60 % 60));
            this.s = toZero(Math.floor(leftTime / 1000 % 60));
        }else if(leftTime === 0){
          clearInterval(timeId)
        }
        
      }, 1000);
      
    },
    watch:{
      personalShop () {
        this.$nextTick(()=>{
          new Swiper('.swiper-shop', {
            loop: true,
            slidesPerView: "auto",
            // loopedSlides: _this.bannerList.length,
            speed: 500,
            autoplay: {
              disableOnInteraction: false, //手动滑动之后不打断播放
              delay: 1500
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-shopIcon',
            }
          })
          let goodName= document.querySelectorAll('.goodName')
          for (let i = 0; i < goodName.length; i++) {
            let str = goodName[i].innerText
            if(str.length>12){
              // str.text(str.substring(0,11)+'...')
              goodName[i].innerText = str.substring(0,12)+'...'
            }
          }
          
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .RecommendContainer
    background #eee
    padding-bottom 20px
    box-sizing border-box
    .sceneLightList
      background #fff
      overflow hidden
      padding 20px 25px
      box-sizing border-box
      .sceneLightItem
        float left
        margin-bottom 5px
        &:nth-child(2n+1)
          margin-right 5px
        a
          display block
          height 264px
          width 343px
          color #333
          padding 20px 0 0 20px
          box-sizing border-box
          .picUrl
            height 150px
            width 150px
          .title
            font-size 32px
          .desc
            margin 10px 0
            font-size 24px
            color #7f7f7f
    .personalShop 
      background #fff
      margin-top 20px
      .personalShopTitle
        height 100px
        font-size 32px
        line-height 100px
        padding-left 25px 
        box-sizing border-box
      .swiper-shopcontainers
        .swiper-shop
          height 370px
          .swiper-wrapper
            height 310px
            .swiper-slide
              float left
              height 310px
              li
                float left
                margin-left 20px
                a
                  display block
                  height 300px
                  width 216px
                  color #333
                  .goodPicUrl
                    width 216px
                    height 216px
                    background #f5f5f5
                    margin-bottom 15px
                    img 
                      width 216px
                  .goodName
                    font-size 24px
                    line-height 30px
                  .goodPrice
                    color #b4282d
    .timeWraper
      margin-top 20px
      // height 698px
      // overflow hidden
      background #ffffff
      .timeContent
        padding 0 30px
        overflow hidden
        a 
          float left
          width 216px
          display flex
          flex-direction column
          justify-content center
          align-items center
          margin-left 20px
          &:nth-child(3n+1)
            margin-left 0
          img 
            height 216px
            background #f5f5f5
            margin-bottom 20px
          .price
            height 72px
            line-height 36px  
            .activityP
              color #b4282d
          .shopInfo
            height 105px
            line-height 36px
            .shopName
              color #333
            .activityP
              color #b4282d
    .topicWraper
      margin-top 20px
      height 508px
      .topicListWraper
         width 750px
         background #ffffff 
        .topicList
          height 408px
          background #ffffff 
          width 1560px
          a
            height 378px
            width 480px
            display block
            background #f5f5f5
            float left
            margin-left 30px
            border-radius 10px
            overflow hidden
            img 
              height 269px
              width 480px
              margin-bottom 20px
            .subtitle
              height 41px
              width 410px
              font-size 28px
              color #333
              padding-left 20px
              overflow hidden
              box-sizing border-box
              white-space nowrap
              text-overflow ellipsis
            .topictitle
              padding-left 20px
              box-sizing border-box
</style>
