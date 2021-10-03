<template>
  <section class="home-banner-section">
    <Slick
        ref="slickBanner"
        @init="handleInitIntro"
        :options="slickOptions"
        class="home-banner">
      <div class="home-banner-item">
        <router-link to="">
          <div class="home-banner-item-image">
            <picture>
              <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <source media="(min-width: 768px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <img srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x" alt="" title="">
            </picture>
          </div>
          <div class="home-banner-item-content-wrapper d-flex justify-content-start align-items-center align-content-left">
            <div class="container">
              <div class="home-banner-item-content">
                <p class="home-banner-item-title">Black & White</p>
                <div class="home-banner-item-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="home-banner-item">
        <router-link to="">
          <div class="home-banner-item-image">
            <picture>
              <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <source media="(min-width: 768px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <img srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x" alt="" title="">
            </picture>
          </div>
          <div class="home-banner-item-content-wrapper d-flex justify-content-start align-items-center align-content-center">
            <div class="container">
              <div class="home-banner-item-content">
                <p class="home-banner-item-title">Black & White</p>
                <div class="home-banner-item-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="home-banner-item">
        <router-link to="">
          <div class="home-banner-item-image">
            <picture>
              <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <source media="(min-width: 768px)" srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x">
              <img srcset="https://fakeimg.pl/1920x1080/ 1x, https://fakeimg.pl/3840x2160/ 2x" alt="" title="">
            </picture>
          </div>
          <div class="home-banner-item-content-wrapper d-flex justify-content-start align-items-center align-content-right">
            <div class="container">
              <div class="home-banner-item-content">
                <p class="home-banner-item-title">Black & White</p>
                <div class="home-banner-item-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </Slick>
  </section>
</template>
<script>
import Slick from 'vue-slick';
export default {
  name: 'HomeBanner',
  components: { Slick },
  data: function () {
    return{
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        speed: 1000,
        lazyLoad: 'progressive'
      }
    }
  },
  methods:{
    handleInitIntro() {
      console.log("Slider Home Banner Init");
    },
    /*TO USE WHEN HAVE CUSTOM ARROWS*/
    /*handleNextSlide() {
      this.$refs.slickBanner.next();
    },
    handlePrevSlide() {
      this.$refs.slickBanner.prev();
    },*/
  }
};
</script>
