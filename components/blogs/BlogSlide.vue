<template>
  <div class="blog-slide">
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#000000"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      class='blog-slide-item'
    >
      
      <b-carousel-slide v-for="(item, i) in data" :key="i">
        <template #img>
          <img
            class="d-block img-fluid"
            width="100%"
            height="677"
            :src="item.image"
            alt="image slot"
          >
          <div class="blog-slide-item-content">
              <SmallText text="#catalogues | #Moodboards | #EBOOKS" />
                <h3>{{item.title}}</h3>
                <h4>{{item.description}}</h4>
                <Button02 text="READ MORE" theme="white" hover="white-black" />
          </div>
        </template>
      </b-carousel-slide>

    </b-carousel>
    
  </div>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
  export default {
    data() {
      return {
        
      }
    },
    props: ['data'],
   components: {
       SmallText,
       Button02
   }
  }
</script>