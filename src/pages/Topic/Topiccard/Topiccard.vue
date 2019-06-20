<template>
  <div class="topicCardContent">
    <div class="cardTitle">
      <span class="avater">
        <img src="https://yanxuan.nosdn.127.net/0f9ad7aa1d111f892a0294b4510e563c.png" alt="">
      </span>
      <span>网易员工精选</span>
    </div>
    <div class="cardContent">赶在大波节日来临之前，这份新鲜出炉的送礼指南请查收</div>
    <img src="https://yanxuan.nosdn.127.net/c66ba59bad8193e85ab6610686611843.jpg" alt="">
    <span class="iconItem">
      <i class="iconfont icon-yanjing"></i>
      <span>22w人看过</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicCardContent
    display flex
    padding 30px 30px 20px
    box-sizing border-box
    flex-direction column
    background-color #fff
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
      height 128px
      line-height 50px  
      font-size 36px
      padding 12px 0
      box-sizing border-box
      color #333
    img 
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
</style>
