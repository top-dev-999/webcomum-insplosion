<template>
  <div class="collection-small-item" 
    @mouseenter="hoverItem = true" 
    @mouseleave="hoverItem = false">
    <b-carousel
      v-model="slide"
      :interval="0"
      :controls="hoverItem"
      indicators
      background="#ffffff"
      img-width="1024"
      img-height="480"
      class='small-slide-item'
      :class="hoverItem == true ? 'item-shadow-effect' : null"
    >
      <a href='/'>
      <b-carousel-slide v-for="(item, i) in data" :key="i" :caption="item.title" :text="item.description">
        <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="item.image"
              alt="image slot"
            >
        </template>
      </b-carousel-slide>  
      </a>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hoverItem: false
      }
    },
    props: ['slide', 'data'],

  }
</script>