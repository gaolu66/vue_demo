<template>
  <footer class='footer'>
    <a href="javascript:;" class="footerItem" @click="goTo('/home')" 
    :class="{on: '/home' === $route.path}">
      <span class="item-icon">
        <i class="iconfont icon-home-line"></i>
      </span>
      <span class="title">首页</span>
    </a>
    <a href="javascript:;" class="footerItem" @click="goTo('/category')" 
    :class="{on: '/category' === $route.path}">
      <span class="item-icon">
        <i class="iconfont icon-categorynormal"></i>
      </span>
      <span class="title">分类</span>
    </a>
    <a href="javascript:;" class="footerItem" @click="goTo('/topic')" 
    :class="{on: '/topic' === $route.path}">
      <span class="item-icon">
        <i class="iconfont icon-toc"></i>
      </span>
      <span class="title">识物</span>
    </a>
    <a href="javascript:;" class="footerItem" @click="goTo('/cart')" 
    :class="{on: '/cart' === $route.path}">
      <span class="item-icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="title">购物车</span>
    </a>
    <a href="javascript:;" class="footerItem" @click="goTo('/profile')" 
    :class="{on: '/profile' === $route.path}">
      <span class="item-icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="title">个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Footer',
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    border-top 1px solid #eee
    width 750px
    height 98px
    position fixed
    bottom 0
    left 0
    z-index 7
    display flex
    justify-content space-around
    box-sizing border-box
    background #fff
    .footerItem
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      font-size 24px
      &.on
        color red
      .item-icon
        .iconfont
          font-size 48px
      .title
        margin-top -20px
</style>
