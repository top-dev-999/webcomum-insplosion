<template>
  <section class="product-list-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Produtos</p>
      </div>
      <div class="product-list">
        <div class="row">
          <div class="d-none d-lg-block col-3">
            <Filters />
          </div>
          <div class="col-12 col-lg-9">
            <div class="row product-list-row">
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
              <div class="col-12 col-sm-6 col-md-4 product-list-column">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from "@/components/products/ProductItem";
import Filters from "@/components/products/Filters";
export default {
  name:'ProductList',
  components: {
    ProductItem,
    Filters
  },
};
</script>
