<template>
  <div class="categoryContainer">
    <div class="categoryHeader">
      <div class="cateSearch" @click="$router.push('/search')">
        <span class="item-icon">
          <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        </span>
        <span class="searchContent">搜索商品,共25192款好物</span>
      </div>
    </div>
    <div class="categoryList">
      <ul class="leftCateList">
        <li class="leftCateItem">618专区</li>
        <li class="leftCateItem">618专区</li>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    position relative
    .categoryHeader
      padding 16px 4% 0
      box-sizing border-box
      height 88px
      .cateSearch
        height 56px
        background #eee
        border-radius 8px
        text-align center
        line-height 56px
        .searchContent
          font-size 28px
          color #666
        .item-icon
          .iconfont  
            font-size 32px
      &::after
        content ''
        background-color #d9d9d9
        height 2px
        width 200%
        transform scale(0.5)
        position absolute
        left 0 
        top 88px
    .categoryList
      position absolute
      width 162px
      height 1120px
      left 0
      top 89px
      background-color pink
      .leftCateList
        .leftCateItem
          color #333
          font-size 28px
          text-align center
          height 50px
          line-height 50px
          margin-top 35px
</style>
