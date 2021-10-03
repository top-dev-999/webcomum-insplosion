<template>
    <div class="app-navbar w-100">
      <div class="navlist">
        <div class="d-none d-lg-flex">
          <NuxtLink to='/find-professional'>FIND PROFESSIONAL</NuxtLink>
        </div>
        <div class="d-none d-lg-flex">
          <NuxtLink to='/about' >ABOUT US</NuxtLink>
        </div>
        <div class="d-none d-lg-flex">
          <NuxtLink to='/contact' >CONTACT</NuxtLink>
        </div>
        <div>
          <NuxtLink to='/'><User />  LOGIN</NuxtLink>
        </div>
        <div class="shop-bg">
          <NuxtLink to='/'><Shop /> SHOP</NuxtLink>
        </div>
      </div>
      <div class="d-none d-md-flex d-lg-flex">
        <p>GET 15% OFF YOUR FIRST ORDER | Shop Now</p>
      </div>
      <div class="d-none d-lg-flex">
        <p>CONTACT US Mon-Sat: 7:30a.m - 12:00a.m GMT+1</p>
      </div>
    </div>
    
    
</template>

<script>
import Search from '@/components/svg/Search';
import User from '@/components/svg/User';
import Shop from '@/components/svg/Shop';
export default {
  name:'AppNavbar',
  components:{
    Search,
    User,
    Shop,
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 1350px) and (min-width: 974px) {
  .app-navbar {
    padding-left: 1.5%;
    padding-right: 1.5%;
    div {
      p {
        font-size: 12px;
      }
    }
    .navlist {
      div {
        a {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
