<template>

  <div class="inspiration-out-products">
      <div class="inspiration-out-products-header">
          <h2>PRODUCTS</h2>
      </div>
      <div class="inspiration-out-products-slide-control">
        <b-carousel
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#fffff"
        img-width="1024"
        img-height="480"
        class="inspiration-out-slide"
        >
        

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide class="inspiration-slide-container">
            <template #img>
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            </template>
        </b-carousel-slide>
        <b-carousel-slide class="inspiration-slide-container">
            <template #img>
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            <InspirationTrendsItem />
            </template>
        </b-carousel-slide>
        </b-carousel>
    </div>
  </div>
</template>

<script>
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
  export default {
    name: "InspirationOutProducts",
    components: {
      InspirationTrendsItem
    }
  }
</script>