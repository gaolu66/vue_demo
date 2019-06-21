<template>
  <div class="topicHeader">
    <span class="icon-home" @click="$router.replace('/home')">
      <i class="iconfont icon-home-line"></i>
    </span>
    <div class="topicHeaderContent">
      <slot name="topic"></slot>
      <slot name="expert"></slot>
      <slot name="logo"></slot>
    </div>
    <div class="iconItem">
      <span @click="$router.push('/search')">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
      </span>
      <span @click="$router.push('/cart')">
        <i class="iconfont icon-gouwuche"></i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicHeader
    height 100px
    width 100%
    padding-left 20px
    box-sizing border-box
    background #fafafa
    display flex
    align-items center
    justify-content space-between
    position fixed
    top 0px
    left 0px
    z-index 8
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
      img 
        height 44px
        margin-left 25px
      span 
        margin-left 25px
        &.on
          color #b4282d
          font-size 40px
          font-weight bold
 
</style>
