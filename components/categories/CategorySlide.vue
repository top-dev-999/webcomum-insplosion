<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
      class="category-slide-control"
    >
      
      <b-carousel-slide v-for="(item, index) in data" :key="index">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            height="900"
            width="780"
            :src="item.image"
            alt="image slot"
          >
          <div v-for="(indicator, index) in item.indicators" :key="index"
                    :style="{ position: 'absolute', top: indicator.y, left: indicator.x }"
                    >
                <FurnitureIndicator :top="indicator.y" :left="indicator.x" 
                        :title="indicator.title" :description="indicator.description"
                        :furniture="indicator.furniture" :id="indicator.id" />
            </div>
        </template>
      </b-carousel-slide>
      

    </b-carousel>

  </div>
</template>

<script>
  import FurnitureIndicator from '@/components/basic/FurnitureIndicator';
  export default {
    name: "CategorySlide",
    props: ["data"],
    components: {
      FurnitureIndicator
    }
  }
</script>