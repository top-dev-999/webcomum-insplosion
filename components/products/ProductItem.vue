<template>
  <article class="product-item">
    <router-link to="/product-detail/1" class="product-item-link">
      <div class="product-item-image-wrapper">
        <div class="product-item-image">
          <picture>
            <source media="(min-width: 992px)" srcset="https://fakeimg.pl/305x305/ 1x, https://fakeimg.pl/610x610/ 2x">
            <source media="(min-width: 768px)" srcset="https://fakeimg.pl/305x305/ 1x, https://fakeimg.pl/610x610/ 2x">
            <img srcset="https://fakeimg.pl/305x305/ 1x, https://fakeimg.pl/610x610/ 2x" alt="" title="">
          </picture>
        </div>
        <button type="button" class="product-item-wishlist-btn">
          <WishlistSVG />
        </button>
      </div>
      <div class="product-item-content">
        <p class="product-item-category">Categoria</p>
        <p class="product-item-title">Produto</p>
        <div class="product-price-wrapper d-flex justify-content-center align-items-center">
          <p class="product-current-price">€20,90</p>
          <p class="product-old-price">€25,40</p>
        </div>
      </div>
    </router-link>
  </article>
</template>
<script>
import WishlistSVG from "@/components/svg/Wishlist";
export default {
  name:'ProductItem',
  components:{
    WishlistSVG,
  }
}
</script>
