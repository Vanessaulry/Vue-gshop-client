<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  import {reqCategory} from './api'

  export default {

    async mounted () {
      const result = await reqCategory()
    },

    components:{
      FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
