<template>
  <div>
    <section class="product-detail-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 product-detail-column">
            <Slick ref="slick" :options="slickOptionsProduct" class="product-detail-slider">
              <div class="product-detail-slider-item" @click="openGallery">
                <picture>
                  <source media="(min-width: 992px)" srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x">
                  <source media="(min-width: 768px)" srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x">
                  <img srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x" alt="" title="">
                </picture>
              </div>
              <div class="product-detail-slider-item" @click="openGallery">
                <picture>
                  <source media="(min-width: 992px)" srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x">
                  <source media="(min-width: 768px)" srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x">
                  <img srcset="https://fakeimg.pl/670x670/ 1x, https://fakeimg.pl/1400x1400/ 2x" alt="" title="">
                </picture>
              </div>
            </Slick>
          </div>
          <div class="col-12 col-md-6 product-detail-column">
            <div class="product-detail-information">
              <button type="button" class="product-detail-wishlist-btn">
                <WishlistSVG />
              </button>
              <p class="product-detail-information-category">Categoria</p>
              <p class="product-detail-information-title">Produto</p>
              <div class="product-detail-information-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div class="product-detail-price-wrapper d-flex justify-content-start align-items-center">
                <p class="product-detail-current-price">€20,90</p>
                <p class="product-detail-old-price">€25,40</p>
              </div>
              <button type="button" class="product-detail-cart-btn">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--PRODUCTS RELATED-->
    <ProductsRelated />

    <!--PRODUCTS GALLERY-->
    <ProductsGallery :slickOptionsGallery="slickOptionsGallery" :gallery="gallery"/>

  </div>
</template>
<script>
//import lazyLoadComponent from "@/utils/lazy-load-component";
import Slick from 'vue-slick';
import ProductsGallery from "@/components/products/ProductsGallery";
import WishlistSVG from "@/components/svg/Wishlist";
export default {
  name: 'ProductDetailContent',
  components: {
    WishlistSVG,
    Slick,
    ProductsGallery,
    /*ProductsRelated: lazyLoadComponent({
      componentFactory: () => import('@/components/products/ProductsRelated'),
    }),*/
  },
  data() {
    return{
      gallery:false,
      slickOptionsProduct: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        speed: 1000,
        lazyLoad: 'progressive',
        asNavFor: '.products-detail-full-slider'

      },
      slickOptionsGallery: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        speed: 1000,
        lazyLoad: 'progressive',
        asNavFor: '.products-detail-slider'

      }
    }
  },
  methods:{
    openGallery(){
      this.gallery = !this.gallery;
      //this.$root.overflowModal();
    }
  },
  /*mounted(){
    EventBus.$on("bus-close-gallery", () =>{
      this.gallery = !this.gallery;
    });
  }*/
};
</script>
