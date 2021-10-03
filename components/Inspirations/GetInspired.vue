<template>
    <div class="get-inspired-control">
        <h3 class="text-center">LET'S GET STARTED</h3>
        <vueper-slides
                class="no-shadow "
                :visible-slides="5"
                slide-multiple
                :slide-ratio="1 / 4"
                :dragging-distance="200" 
                :arrows="false"
                :bullets="false"
                :infinite="true"
                fixed-height="550px"
                >
                <vueper-slide
                    v-for="i in 10"
                    :key="i"
                >
                    <template #content>
                    <!-- <div class="vueperslide__content-wrapper" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
                        <div class="vueperslide__title">{{ i.toString() }}</div>
                    </div> -->
                        <GetInspiredItem />
                    </template>
                </vueper-slide>
            </vueper-slides>
    </div>
</template>

<script>
import GetInspiredItem from '@/components/Inspirations/GetInspiredItem';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'GetInspired',
    components: {
        GetInspiredItem,
        VueperSlides,
        VueperSlide
    }
}
</script>