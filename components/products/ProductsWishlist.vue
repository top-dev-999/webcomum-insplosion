<template>
  <section class="product-list-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Wishlist</p>
      </div>
      <div class="product-list">
        <div class="row wishlist-list-row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 wishlist-list-column">
            <ProductItem/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from "@/components/products/ProductItem";
export default {
  name:'WishlistList',
  components: {
    ProductItem,
  },
};
</script>

