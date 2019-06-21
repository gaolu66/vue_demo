<template>
  <div class="LoginContaner">
    <div class="logo">
      <img class="logoPic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <form>
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="请输入手机号" 
        name="phone" v-model="phone" v-validate="{required: true,regex: /^1\d{10}$/}">
      </section>
      <section class="login_message">
        <input type="code" placeholder="请输入短信验证码" 
        name="code" v-model="code" v-validate="'required'">
        <button class="get_verification">获取验证码</button>
      </section>
      <span v-show="errors.has('code')" style="color: red">{{ errors.first('code') }}</span>
      <span v-show="errors.has('phone')" style="color: red">{{ errors.first('phone') }}</span>
      <section class="text">
        <span class="problem">遇到问题?</span>
        <span class="changePass">使用密码验证登录</span>
      </section>
      <button class="login" @click.prevent="login">登录</button>
      <button class="otherLogin" @click.prevent="goto(0)">其他登录方式</button>
      <div class="register">
        <span>注册帐号 </span>
        <i class="iconfont icon-zhang"></i>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      goto: Function
    },
    data () {
      return {
        phone: '',
        code: ''
      }
    },
    methods: {
      async login () {
        const {phone, code} = this
        let names = ['phone', 'code']
        
        // 进行统一的前台表单验证
        const success = await this.$validator.validateAll(names)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.LoginContaner
  background-color #fff
  position relative
  width 100%
  height 100%
  padding 0 40px
  box-sizing border-box
  .logo
    margin-top 150px 
    width 100%
    text-align center
    .logoPic
      height 64px 
      width 192px
  form
    margin-top 150px
    height 622px
    width 100%
    .login_message
      height 93px
      width 100%
      margin-top 30px
      position relative
      input 
        outline none
        height 93px
        border-bottom 1px solid #eee
        width 100%
        &::-webkit-input-placeholder 
          color #999
          font-size 28px
          line-height 93px
      button 
        background-color #fff
        height 54px
        width 164px
        border-radius 8px
        outline none
        color #333
        border 2px solid #7F7F7F 
        position absolute
        top 18px 
        right 12px
    .text
      height 110px
      line-height 110px
      .problem
        color #999
        float left
        font-size 28px
      .changePass
        color #666
        float right
        font-size 28px
    button 
      height 94px
      width 670px 
      border-radius 8px
      margin-bottom 30px 
      border 2px solid #b4282d
      &.login
        background #b4282d
        color #fff
      &.otherLogin
        background rgba(0,0,0,0)
        color #b4282d
    .register
      font-size 28px 
      color #333
      text-align center
      padding-left 20px
      box-sizing border-box
      .iconfont
        font-size 40px
        color #333
        position relative
        top 4px
        left -10px
</style>
