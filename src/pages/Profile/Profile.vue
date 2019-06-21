<template>
  <div class="ProfileContainer">
    <TopicHeader>
      <img slot="logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
    </TopicHeader>
    <img class="logoPic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    <div class="profileLogin">
      <button>手机号码登录</button>
      <button>邮箱账号登录</button>
      <span>
        <span>手机号快速注册</span>
        <i class="iconfont icon-zhang"></i>
      </span>
    </div>
    <div>
      <span>
        <i class="iconfont icon-changyonglogo28"></i>
        <span>微信</span>
      </span>
      <span>|</span>
      <span>
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </span>
      <span>|</span>
      <span>
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopicHeader from '../../components/TopicHeader/TopicHeader'
  export default {
    components: {
      TopicHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ProfileContainer
    height 100%
    background #f4f4f4
    padding-top 100px
    box-sizing border-box
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    .profileLogin
      display flex
      flex-direction column
      align-items center
    .logoPic
      width 268px
</style>
