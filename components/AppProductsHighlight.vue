<template>
  <section class="related-products-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Produtos Destaque</p>
      </div>
      <Slick ref="slickProducts" :options="slickOptions" class="related-products-slider">
        <div class="related-products-item">
          <ProductItem />
        </div>
        <div class="related-products-item">
          <ProductItem />
        </div>
        <div class="related-products-item">
          <ProductItem />
        </div>
        <div class="related-products-item">
          <ProductItem />
        </div>
        <div class="related-products-item">
          <ProductItem />
        </div>
        <div class="related-products-item">
          <ProductItem />
        </div>
      </slick>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick';
import ProductItem from "@/components/products/ProductItemHighlight";
export default {
  name: 'ProductsHighlight',
  components: {
    Slick,
    ProductItem
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
