<template>
  <div>
    <Nuxt/>
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
