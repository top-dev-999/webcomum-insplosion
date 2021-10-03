<template>
  <div class="luxury-brands-slide-item">
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ffffff"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      class='luxury-brands-slide'
    >
      <a href='/'>
      <b-carousel-slide v-for="(item, i) in data.images" :key="i">
        <template #img>
          <img
            class="d-block img-fluid"
            :src="item.image"
            alt="image slot"
          >
          
        </template>
      </b-carousel-slide>
      </a>
    </b-carousel>
    <h3>{{data.title}}</h3>
    <h4>{{data.description}}</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: ['slide', 'data'],
   
  }
</script>