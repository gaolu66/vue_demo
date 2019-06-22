<template>
 <div class="homeHeader">
   <a href="javescript:;" class="logo"></a>
   <div class="search" @click="$router.push('/search')">
     <span class="item-icon">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
      </span>
      <span class="search_content">搜索商品,共25192款好物</span>
   </div>
   <router-link to="/profile" class="login">登录</router-link>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeHeader
    position fixed
    top 0
    left 0
    z-index 7
    height 88px
    width 750px
    padding 16px 24px
    box-sizing border-box
    display flex
    align-items center
    justify-content space-around
    background #fff
    .logo
      display inline-block
      width 140px
      height 40px
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-size 140px 40px
    .search
      height 54px
      width 440px
      background #eee
      border-radius 8px
      text-align center
      line-height 54px
      .search_content
        font-size 28px
        color #666
      .item-icon
        .iconfont  
          font-size 32px
    .login
      border-radius 16px
      font-size 48px
      color #b4282d
      text-align center
      line-height 80px
      content '登录'
      border 2px solid #b4282d
      height 80px
      width 144px
      margin 0 -40px
      transform scale(0.5) 
</style>
