<template>
  <div class="saleContainer">
    <div class=saleHeader>
      <a href="javascript:;">
        <div class="saleGood">
          <img src="http://yanxuan.nosdn.127.net/cde6ca441039a3867b78a782e6908ce7.png" alt="">
          <div class="price">
            <span>¥3699</span>
          </div>
        </div>
      </a>
    </div>
    <div class="saleTab">
      <a href="javascript:;" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">
        <img src="http://yanxuan.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?imageView&thumbnail=160x160&quality=75" alt="">
      </a>
    </div>
    <div class="imgTab">
      <a href="javascript:;" style="background:url('https://yanxuan.nosdn.127.net/b30105f1c452dfa26cb401351d971c0b.png?imageView&thumbnail=250x0&quality=75');background-size:100% 100%"></a>
      <a href="javascript:;" style="background:url('https://yanxuan.nosdn.127.net/31ac73271eaa642e29995bb89ff0ae9b.png?imageView&thumbnail=250x0&quality=75');background-size:100% 100%"></a>
      <a href="javascript:;" style="background:url('https://yanxuan.nosdn.127.net/8f9bf41a49097a264dd64671461975e8.png?imageView&thumbnail=250x0&quality=75');background-size:100% 100%"></a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .saleContainer
    position relative
    background-image url('https://yanxuan.nosdn.127.net/6b2eb7819e2e7802d8cded1246e30697.jpg?imageView&quality=75')
    .saleHeader
      width 100%
      height 280px
      a
        height 280px
        width 100%
        display block
        background-image url('https://yanxuan.nosdn.127.net/3efc060567d99c8ec5882c6d0b087be1.gif?imageView&quality=75')
        background-size 100% 100%
        .saleGood
          position absolute
          top 40px
          right 70px
          img 
            height 168px
            width 168px
          .price
            height 30px
            width 152px
            margin -42px auto 0
            background-color #F48F18
            border-radius 20px
            color #fff
            text-align center
            span
              font-size 10px
    .saleTab
      width 710px
      margin 0 auto
      overflow hidden
      margin-top 20px
      a
        display block
        float left 
        height 186px
        width 348px
        border-radius 10px
        background-image url('https://yanxuan.nosdn.127.net/ee26de3a440f1253efd9d2b6bc4b739d.png?imageView&thumbnail=375x0&quality=75')
        background-size 100% 100%
        position relative
        margin-bottom 8px
        &:nth-child(2n+1)
          margin-right 8px
        img 
          height 160px
          width 160px
          position absolute
          top 18px
          right 10px
    .imgTab
      width 710px
      margin 10px auto 0
      display flex
      justify-content space-between
      a
        display block
        height 220px
        width 231px
</style>
