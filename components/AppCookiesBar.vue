<template v-once>
  <div class="cookie-bar-wrapper" :class="{show:$store.state.showCookieBar}">
    <div class="container">
      <div class="cookie-bar-content">
        <div class="cookie-text">
          Warning! Using this website you are consenting the use of cookies to improve your experience.
          Get to know our Cookie Policies <router-link to="/">here.</router-link>
        </div>
        <div class="cookie-btn">
          <a href="javascript:void(0)" class="custom-btn cookie" @click="acceptCookies">Accept</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'CookiesBar',
  methods:{
    acceptCookies(){
      this.$store.dispatch('setCookiesTrue');
    }
  },
}
</script>
