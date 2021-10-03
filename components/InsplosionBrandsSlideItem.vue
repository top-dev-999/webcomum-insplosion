<template>
  <div class="insplosion-brands-slide-item">
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      img-width="1024"
      img-height="480"
      class='insplosion-brand-slide'
    >
      
      <b-carousel-slide v-for="(item, i) in data.images" :key="i">
        <template #img>
          <img
            class="d-block img-fluid"
            width="623"
            height="732"
            :src="item.image"
            alt="image slot"
          >
          <h3>{{data.title}}</h3>
          <h4>{{data.description}}</h4>
        </template>
      </b-carousel-slide>

    </b-carousel>
    <h3>MODERN MARBLE LIVING ROOM</h3>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
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