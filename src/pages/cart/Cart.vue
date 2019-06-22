<template>
  <div class="cartContainer">
    <div class="cartHeader">
      <span class="headerLeft">购物车</span>
      <router-link class="headerRight" rel="stylesheet" to="javascript]:;">领券</router-link>
    </div>
    <div class="cartContent">
      <span>
        <i class="iconfont icon-yuan-copy"></i>
        30天无忧退货
      </span>
      <span>
        <i class="iconfont icon-yuan-copy"></i>
        48小时快速退款
      </span>
      <span>
        <i class="iconfont icon-yuan-copy"></i>
        满88元免邮费
      </span>
    </div>
    <div class="backCart">去添加点什么吧</div>
    <div class="loginBtn">
      <button @click.prevent="$router.push('/profile')">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartContainer
    height 100%
    background #f4f4f4
    .cartHeader
      background-color #fff
      height 88px
      padding 0 30px
      box-sizing border-box
      line-height 88px
      .headerLeft
        float left
        font-size 36px 
      .headerRight
        float right
        color #B4282D
        font-size 30px
        margin-right 30px
    .cartContent
      height 70px
      padding 0 30px 0 23px
      box-sizing border-box
      display flex
      align-items center
      justify-content space-between
      font-size 24px
      color #666
      span 
        .iconfont
          display inline-block
          font-size 20px
          -webkit-transform scale(0.7)
          margin-right -8px
    .backCart
      height 300px
      margin-top 350px
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png')
      background-position center
      background-size 248px 248px
      background-repeat no-repeat
      text-align center
      line-height 550px
      font-size 28px
      color #999
    .loginBtn
      text-align center
      margin-top 40px
      button  
        height 92px 
        width 480px
        background-color #b4282d
        color #fff
        font-size 30px
        border-radius 3px
        border none 
</style>
