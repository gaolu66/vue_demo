<template>
  <div class="topicContainer">
    <TopicHeader>
      <span slot="topic" :class="{on:$route.path==='/topic'}" @click="$router.push('/topic')">发现</span>
      <span slot="expert" @click="$router.push('/expert')" :class="{on:$route.path==='/expert'}">甄选家</span>
    </TopicHeader>
    <div class="topicNav">
      <div class="topicWrapper">
        <ul class="navList">
          <li class="navItem" :class="{on: type===0}" @click="type=0">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="navItem" :class="{on: type===1}" @click="type=1">
            <a href="javascript:;">618年中盛典</a>
          </li>
          <li class="navItem" :class="{on: type===2}" @click="type=2">
            <a href="javascript:;">好货内部价</a>
          </li>
          <li class="navItem" :class="{on: type===3}" @click="type=3">
            <a href="javascript:;">回购榜</a>
          </li>
          <li class="navItem" :class="{on: type===4}" @click="type=4">
            <a href="javascript:;">晒单</a>
          </li>
          <li class="navItem" :class="{on: type===5}" @click="type=5">
            <a href="javascript:;">开发者日记</a>
          </li>
          <li class="navItem" :class="{on: type===6}" @click="type=6">
            <a href="javascript:;">达人</a>
          </li>
          <li class="navItem" :class="{on: type===7}" @click="type=7">
            <a href="javascript:;">HOME</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="topicContent">
      <div class="topicCardwraper">
        <TopicCard :page= "num" :newCards="newTopics"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import TopicCard from './TopicCard/TopicCard'
  import TopicHeader from '../../components/TopicHeader/TopicHeader'
  import {reqTopics} from '../../api/index'
  
  export default {
    data () {
      return {
        type: 0,
        num: 1,
        newTopicsResult: [],
        newTopics: []
      }
    },
    mounted () {
      new BScroll('.topicWrapper',{
        scrollX: true,
        click: true,
        bounce: false
      })
      this.myScroll = new BScroll('.topicCardwraper',{
        click: true,
        pullUpLoad: {
          threshold: 0
        },
        scrollbar: {
          fade: 900,
          interactive: false // 1.8.0 新增
        },
        mouseWheel: true,
      })
      this.myScroll.on('pullingUp', async () => {
        this.num++
        const result = await reqTopics(this.num, 5)
        if (result.code==='200') {
          this.newTopicsResult = result.data.result
          let topic = []
          for (let i = 0; i < this.newTopicsResult.length; i++) {
            if(this.newTopicsResult[i].look){
              topic = topic.concat(this.newTopicsResult[i].look)
            }
            topic.push(this.newTopicsResult[i].topics)
          }
          this.newTopics = this.newTopics.concat(topic.flat())
        }
        this.$nextTick(() => {
          this.myScroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
        })
        this.myScroll.finishPullUp() // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
      })
    },
    /* computed:{
      newCards(){
        return this.newTopics
      }
    }, */
    components: {
      TopicCard,
      TopicHeader
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicContainer
    background #f4f4f4
    .topicNav
      position fixed
      top 100px
      left 0
      z-index 8
      .topicWrapper
        height 90px
        width 750px
        .navList
          border-top 2px solid #d9d9d9
          border-bottom 2px solid #d9d9d9
          background #fafafa
          width 1212px
          padding-left 20px
          overflow hidden
          .navItem
            float left
            margin-right 34px
            a
              display block
              height 72px
              color #7f7f7f
              line-height 72px
              margin 0 10px
              font-size 28px
            &.on
              border-bottom 4px solid #B4282D
              color #B4282D
    .topicContent
      padding-top 200px
      .topicCardwraper
        height 1000px
</style>
