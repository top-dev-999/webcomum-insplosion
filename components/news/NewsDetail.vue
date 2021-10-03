<template>
  <div>
    <section class="news-detail-section section-padding">
      <div class="container">
        <Slick ref="slick" :options="slickOptions" class="news-detail-slider">
          <div class="news-detail-slider-item">
            <picture>
              <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x">
              <source media="(min-width: 768px)" srcset="https://fakeimg.pl/der.com/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x">
              <img srcset="https://fakeimg.pl/der.com/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x" alt="" title="">
            </picture>
          </div>
          <div class="news-detail-slider-item">
            <picture>
              <source media="(min-width: 992px)" srcset="http://via.placeholder.com/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x">
              <source media="(min-width: 768px)" srcset="http://via.placeholder.com/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x">
              <img srcset="http://via.placeholder.com/1110x400/ 1x, https://fakeimg.pl/2220x800/ 2x" alt="" title="">
            </picture>
          </div>
        </Slick>

        <div class="news-detail-information">
          <p class="news-detail-information-category">Categoria</p>
          <p class="news-detail-information-title">Noticia</p>
          <div class="news-detail-information-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi enim. Semper auctor neque vitae tempus. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Ut tellus elementum sagittis vitae et. Phasellus egestas tellus rutrum tellus pellentesque. Lacus laoreet non curabitur gravida arcu. Velit aliquet sagittis id consectetur purus ut faucibus. Scelerisque purus semper eget duis at tellus at urna. Massa ultricies mi quis hendrerit. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
            <br>
            <p>Vitae ultricies leo integer malesuada. Nullam ac tortor vitae purus faucibus ornare suspendisse. Enim sit amet venenatis urna cursus eget. Id venenatis a condimentum vitae sapien. Pellentesque sit amet porttitor eget dolor morbi non arcu. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Quisque sagittis purus sit amet. Sapien et ligula ullamcorper malesuada proin libero nunc. Ac ut consequat semper viverra nam. Nibh venenatis cras sed felis eget velit aliquet sagittis. Phasellus vestibulum lorem sed risus. Quam quisque id diam vel quam elementum pulvinar etiam non. At tellus at urna condimentum mattis pellentesque. Suscipit tellus mauris a diam maecenas sed enim ut. Adipiscing tristique risus nec feugiat in fermentum posuere. Vestibulum lectus mauris ultrices eros in.</p>
            <br>
            <p>Dapibus ultrices in iaculis nunc. At in tellus integer feugiat. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet consectetur adipiscing elit. Placerat duis ultricies lacus sed turpis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Ut venenatis tellus in metus vulputate eu scelerisque. Eleifend donec pretium vulputate sapien. Convallis aenean et tortor at risus viverra. Volutpat blandit aliquam etiam erat velit scelerisque. Sit amet volutpat consequat mauris nunc. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Suspendisse in est ante in nibh mauris cursus. Pellentesque massa placerat duis ultricies lacus sed turpis. Sit amet cursus sit amet dictum sit amet justo. Feugiat in fermentum posuere urna nec tincidunt. Est pellentesque elit ullamcorper dignissim.</p>
            <br>
            <p>Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Fermentum iaculis eu non diam phasellus vestibulum lorem. Mi quis hendrerit dolor magna eget est lorem ipsum. Eu volutpat odio facilisis mauris sit amet massa vitae. Neque ornare aenean euismod elementum nisi quis. Dictum varius duis at consectetur. Ut lectus arcu bibendum at varius. Pellentesque dignissim enim sit amet. Mauris in aliquam sem fringilla ut morbi. Non tellus orci ac auctor augue mauris augue neque. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Eu tincidunt tortor aliquam nulla.</p>
          </div>
          <p class="news-detail-information-date">Publicada a 1 Janeiro 2020</p>
        </div>
        <!--<div class="social-share">
          <p class="shareTitle">Share</p>
          <ShareNetwork
              network="facebook"
              :title="this.titleSEO"
              :url=this.actualUrl
              :quote=this.titleSEO
          >
            <FacebookSVG/>
          </ShareNetwork>
          <ShareNetwork
              network="LinkedIn"
              :title="this.titleSEO"
              :url=this.actualUrl
          >
            <LinkedinSVG />
          </ShareNetwork>
          <ShareNetwork
              network="Twitter"
              :title="this.titleSEO"
              :url=this.actualUrl
          >
            <TwitterSVG />
          </ShareNetwork>
        </div>-->
      </div>
    </section>

    <!--NEWS RELATED-->
    <NewsRelated />

  </div>
</template>
<script>
import Slick from 'vue-slick';
import FacebookSVG from "@/components/svg/Facebook";
import LinkedinSVG from "@/components/svg/Linkedin";
import TwitterSVG from "@/components/svg/Twitter";
export default {
  name: 'NewsDetailContent',
  components: {
    Slick,
    FacebookSVG,
    LinkedinSVG,
    TwitterSVG,
    /*NewsRelated: lazyLoadComponent({
      componentFactory:() => import('@/components/news/NewsRelated')
    })*/
  },
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
        lazyLoad: 'progressive',
      }
    }
  }
};
</script>
