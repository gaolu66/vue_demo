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
      <div class="leftWrap">
        <ul class="leftCateList">
          <li class="leftCateItem" v-for="(item, index) in categoryList" :key="index" 
          :class="{on: type === index}" @click="type = index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="rightWrap">
        <div class="rightCate">
          <img class="bander" :src="categoryList.length?categoryList[type].imgUrl:''" alt="">
          <div class="rightCateList">
            <a href="javascript" class="rightCateItem" v-for="(item, index) in subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {reqCategoryList} from '../../api'
  export default {
    data () {
      return {
        categoryList: [],
        type: 0,
      }
    },
    computed: {
      subCateList () {
        if(this.categoryList.length){
          return this.categoryList[this.type].subCateList
        }
      }
    },
    async mounted () {
      const result = await reqCategoryList()
      if(result.code === 0) {
        this.categoryList = result.data
      }
      this.$nextTick(()=>{
        new BScroll('.leftWrap', {
          click: true
        })
      })
    },
    watch: {
      subCateList () {
        this.$nextTick(()=>{
          new BScroll('.rightWrap', {
            click: true
          })
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    .categoryHeader
      overflow hidden
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
        transform-origin 0 0
        position absolute
        left 0 
        top 88px
    .categoryList
      height 1148px
      .leftWrap
        float left
        width 162px
        height 1100px
        overflow hidden
        .leftCateList
          padding-top 12px
          box-sizing border-box
          height 1120px
          .leftCateItem
            color #333
            font-size 28px
            text-align center
            height 50px
            line-height 50px
            margin-top 50px
            box-sizing border-box
            &.on
              border-left 4px solid #b4282d
              color #b4282d 
      .rightWrap
        float left 
        height 1148px
        overflow hidden
        margin 0 30px
        .rightCate
          // height 1100px
          .bander
             height 192px
             width 528px
             margin-top 36px
             margin-bottom 20px
          .rightCateList
            //  height 863px
            width 528px
            overflow hidden
            .rightCateItem
              height 216px
              width 144px
              display flex
              flex-direction column
              align-items center
              margin-right 30px
              float left
              img 
                height 144px
                width 144px
                margin-bottom 10px
              span 
                font-size 24px
                color #333
          
</style>
