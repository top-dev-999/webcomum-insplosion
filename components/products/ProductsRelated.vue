<template>
  <section class="related-products-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Produtos Relacionados</p>
      </div>
      <Slick ref="slickRelated" :options="slickOptions" class="related-products-slider">
        <div class="related-products-item">
          <Product />
        </div>
        <div class="related-products-item">
          <Product />
        </div>
        <div class="related-products-item">
          <Product />
        </div>
        <div class="related-products-item">
          <Product />
        </div>
        <div class="related-products-item">
          <Product />
        </div>
        <div class="related-products-item">
          <Product />
        </div>
      </slick>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick';
import Product from "@/components/products/ProductItemHighlight";
export default {
  name: 'ProductsRelated',
  components: {
    Slick,
    Product
  },
  data: function () {
    return{
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        speed: 1000,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
        ]
      }
    }
  }
};
</script>
