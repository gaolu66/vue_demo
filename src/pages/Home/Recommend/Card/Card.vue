<template>
  <div class="cardHeader">
    <span>{{title}}</span>
    <slot name="time"></slot>
    <slot name="more"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cardHeader
    padding 30px
    box-sizing border-box
    background #fff
    height 100px
    font-size 32px
    .shopMore
      float right 
      font-size 28px
      .iconItem
        margin-left -10px
    .shopTime
      margin-left 16px
      .time
        background #333
        font-size 24px
        color #fff
        padding 2px 5px
</style>
