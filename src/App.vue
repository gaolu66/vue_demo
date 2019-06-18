<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
    width 100%
</style>