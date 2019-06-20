<template>
  <div class="topicContainer">
    <div class="topicHeader">
      <span class="icon-home">
        <i class="iconfont icon-home-line"></i>
      </span>
      <div class="topicHeaderContent">
        <span class="on">发现</span>
        <span>甄选家</span>
      </div>
      <div class="iconItem">
        <span>
          <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        </span>
        <span>
          <i class="iconfont icon-gouwuche"></i>
        </span>
      </div>
     
    </div>
    <div class="topicNav">
      <div class="topicWrapper">
        <ul class="navList">
          <li class="navItem">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">618年中盛典</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">好货内部价</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">回购榜</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">晒单</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">开发者日记</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">达人</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">HOME</a>
          </li>
        </ul>
      </div>
    </div>
    <topicCard/>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import TopicCard from './Topiccard/Topiccard'
  export default {
    mounted () {
      new BScroll('.topicWrapper',{
        scrollX: true,
        click: true,
        bounce: false
      })
    },
    components: {
      TopicCard
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicContainer
    background #eee
    .topicHeader
      height 100px
      padding-left 20px
      box-sizing border-box
      background #fafafa
      display flex
      align-items center
      justify-content space-between
      .icon-home
        .iconfont 
          font-size 60px
      .iconItem
        span 
          margin-right 30px
          .iconfont
            font-size 50px
      .topicHeaderContent
        font-size 28px
        color #7f7f7f
        margin-left 58px
        span 
          margin-left 25px
          &.on
            color #b4282d
            font-size 40px
            font-weight bold
    .topicNav
      margin-top 5px
      .topicWrapper
        height 92px
        width 100%
        overflow hidden
        .navList
          background #fafafa
          width 1212px
          padding-left 20px
          overflow hidden
          .navItem
            float left
            margin-right 34px
            a
              display block
              height 72px
              color #7f7f7f
              line-height 72px
              margin 0 10px
              font-size 28px

</style>
