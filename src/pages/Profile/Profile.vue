<template>
  <div class="ProfileContainer">
    <TopicHeader>
      <img slot="logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
    </TopicHeader>
    <div v-if="type===0" class="loginContainer">
      <img class="logoPic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="profileLogin">
        <button @click="goto(1)">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </button>
        <button>
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
        </button>
        <span>
          <span>手机号快捷注册</span>
          <i class="iconfont icon-zhang"></i>
        </span>
      </div>
      <div class="loginTypes">
        <span class="iconItem">
          <i class="iconfont icon-changyonglogo28"></i>
          <span>微信</span>
        </span>
        <span class="iconItem">
          <i class="iconfont icon-qq1"></i>
          <span>QQ</span>
        </span>
        <span class="iconItem">
          <i class="iconfont icon-weibo1"></i>
          <span>微博</span>
        </span>
      </div>
    </div>
    <Login v-if="type===1" :goto="goto"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopicHeader from '../../components/TopicHeader/TopicHeader'
  import Login from './Login/Login'
  export default {
    data () {
      return {
        type: 0
      }
    },
    components: {
      TopicHeader,
      Login
    },
    methods: {
      goto (n) {
        this.type = n
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ProfileContainer
    height 100%
    background #F2F5F4
    position relative
    .loginContainer
      display flex
      flex-direction column
      align-items center
      .profileLogin
        width 100%
        display flex
        flex-direction column
        align-items center
        position absolute
        top 500px
        button 
          position relative
          width 670px
          margin 30 auto
          height 94px
          margin-bottom 30px
          border 2px solid #b4282d
          line-height 94px
          &:first-child
            background #b4282d
            color #fff
            span
              margin-left 50px
              color #fff
          &:nth-child(2)
            background rgba(0,0,0,0)
            color #b4282d
            span
              margin-left 50px
              color #b4282d
          .iconfont
            font-size 40px
            position absolute
            top 0px
            left 220px
        span
          font-size 28px
          color #333
          position relative
          margin-left -20px
          .iconfont
            position absolute
            top -5px
            left 170px
            font-size 40px
      .logoPic
        position absolute
        top 250px
        width 268px
      .loginTypes
        position absolute
        color #7f7f7f
        top 1210px
        .iconItem 
          position relative
          display inline-block
          width 170px
          height 40px
          text-align center
          line-height 40px
          border-left 1px solid #7f7f7f 
          padding-left 50px
          box-sizing border-box
          font-size 28px
          &:first-child
            border none
          .iconfont 
            font-size 44px
            position absolute
            left 30px 
            top 0
</style>
