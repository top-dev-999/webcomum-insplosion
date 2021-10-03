<template>
  <div>
    <!--NAVBAR-->
    <AppHeader/>
    <Nuxt/>
    <!--FOOTER-->
    <!-- <AppFooter /> -->
    <!--COOKIES-->
    <!-- <LazyAppCookiesBar /> -->
    <!--MODAL-->
    <!-- <LazyAppModalPopup /> -->
  </div>
</template>
<script>
import {store} from '@/store/index'
export default{
  name:'Insplosion',
  computed:{
    store(){
      return this.$store;
    }
  },
  methods:{
    key(route) {
      return route.fullPath
    },
  },
  mounted() {
    // this.$verifyCookies();
    // this.$overflowModal();
    // will console.log 'Hello mounted!'
  },
}
</script>
