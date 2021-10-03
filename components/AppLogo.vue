<template>
    <div>
      <img src="@/assets/images/logo/logo-white.png" alt="" v-if="theme == 'light'">
      <img src="@/assets/images/logo/logo.png" alt="" v-if="theme == 'dark'">
      <img src="@/assets/images/logo/logo.png" alt="" v-if="theme == 'white'">
    </div>
</template>
<script>
export default {
  name:'AppLogo',
  props: ['theme']
}
</script>
