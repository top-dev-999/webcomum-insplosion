<template>
    <div class="trends-out-moodboard-control">
        <div class="trends-out-moodboard-header">
            <h2>MOODBOARD</h2>
        </div>
        <div class="trends-out-moodboard-slide-control">
            <b-carousel
                v-model="slide"
                :interval="0"
                controls
               
                class="moodboard-slide"
                >
                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide v-for="(itemGroup, i) in items" :key="i" class="moodboard-slide-container">
                    <template #img>
                        <TrendsOutMoodBoardItem :data="item" v-for="(item, j) in itemGroup" :key="j"/>
                    </template>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
import InspirationListItem from '@/components/Inspirations/InspirationListItem';
import TrendsOutMoodBoardItem from '@/components/trendsout/TrendsOutMoodBoardItem';
export default {
    name: "TrendsOutMoodBoards",
    components: {
        InspirationListItem,
        TrendsOutMoodBoardItem
    },
    data() {
      return {
        items: [
          [
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        ],
        [
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                image: require('@/assets/images/trendsout/moodboard/item.png'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        ],
      ]     
      }
    },
}
</script>