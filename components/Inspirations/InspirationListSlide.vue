<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#f1f2f2"
      img-width="1024"
      img-height="480"
      class="inspiration-slide"
    >
    

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide v-for="(itemGroup, i) in items" :key="i" class="inspiration-slide-container">
        <template #img>
          <InspirationListItem :data="item" v-for="(item, j) in itemGroup" :key="j"/>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import InspirationListItem from '@/components/Inspirations/InspirationListItem';
  export default {
    data() {
      return {
        items: [
          [
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
        ],
        [
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM7',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM9',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM10',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
        ],
      ]
        
      }
    },
    components: {
      InspirationListItem
    }
  }
</script>