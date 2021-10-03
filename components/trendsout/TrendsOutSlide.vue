<template>
  <div class="trends-out-slide-control">
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      width="950px"
      height="635px"
      style="text-shadow: 1px 1px 2px #333;"
      class="trendsout-slide"
    >
    
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="930"
            height="480"
            src="@/assets/images/trendsout/slides/slide1.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="930"
            height="480"
            src="@/assets/images/trendsout/slides/slide1.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    
  }
</script>