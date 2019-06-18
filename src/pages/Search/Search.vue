<template>
  <div class="searchContainer">
    <div class="searchContent">
      <div class="searchHeader">
      <div class="search">
        <span class="item-icon">
          <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        </span>
        <input type="text" :placeholder="keyWord" v-model="value">
        <span class="iconItem" @click="value = ''">
          <i class="iconfont icon-delete"></i>
        </span>
      </div>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="searchList" v-if="!value">
      <div class="hotSearch">热门搜索</div>
      <ul class="hotKeywordList">
        <li v-for="(item, index) in searchList" :key="index" :class="{on:index===0}">
          <a href="javascript:;">{{item.keyword}}</a>
        </li>
      </ul>
    </div>
    <div class="inputList" v-if="value">
      <ul>
        <li v-for="(item, index) in inputList" :key="index" :class="{line: index!==0}">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import { reqKeyword, reqInputWord } from '../../api'
  export default {
    data () {
      return {
        searchList: [],
        keyWord: '',
        value: '',
        inputList: []
      }
    },
    async mounted () {
      const result = await reqKeyword()
      if(result.code === '200') {
        this.keyWord = result.data.defaultKeyword.keyword
        this.searchList = result.data.hotKeywordVOList
      }
    },
    watch: {
      async value () {
        const result = await reqInputWord(this.value)
        if(result.code === '200') {
          this.inputList = result.data
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    background-color #f4f4f4
    width 100%
    height 100%
    .searchContent
      width 100%
      padding 0 30px
      box-sizing border-box
      background-color #fff
      .searchHeader
        background-color #fff
        height 88px
        padding-top 20px
        box-sizing border-box
        .search
          display inline-block
          background-color #f4f4f4
          width 604px
          position relative
          .item-icon
            margin-right 10px
            margin-left 20px
            .iconfont
              font-size 32px
          input 
            background-color #f4f4f4
            width 520px
            height 54px
            border none
            outline none
          .iconItem
            position absolute
            top 10px
            right 30px
            .iconfont 
              font-size 28px
              color #ccc
        span 
          margin-left 20px
          font-size 28px
      .searchList
        background-color #fff
        .hotSearch
          height 90px
          line-height 90px
          font-size 28px
          color #999
        .hotKeywordList
          height height 316px
          li
            padding 0 15px
            height 47px
            border 1px solid #666
            display inline-block
            margin 0 32px 32px 0
            border-radius 5px
            text-align center
            line-height 47px
            &.on
              border 2px solid #b4282d
              color #b4282d
            a
              font-size 24px
              color #333
      .inputList
        background-color #fff
        ul
          li
            height 90px
            width 200%
            line-height 200px
            font-size 56px
            transform scale(0.5) 
            transform-origin 0 0
            &.line
              border-top 1px solid #d9d9d9
            a
              color #333
</style>
