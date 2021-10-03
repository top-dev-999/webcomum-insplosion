<template>
    <div class="keep-updated-control" id="news">
        <div class="keep-updated-header">
            <div>
                <SmallText text="OUR LATEST NEWS" />
                <h2>KEEP UPDATED</h2>
            </div>
            <div>
                <Button02 text='VIEW ALL NEWS' theme="black" hover="black-white" />
            </div>
        </div>
        <div>
            <vueper-slides
                class="no-shadow keepupdated-slide"
                :visible-slides="4"
                slide-multiple
                :slide-ratio="1 / 4"
                :dragging-distance="200" 
                fixed-height="650px"
                :arrows="false"
                :bullets="false"
                :infinite="false"
                >
                <vueper-slide
                    v-for="i in 10"
                    :key="i"
                >
                    <template #content>
                    <!-- <div class="vueperslide__content-wrapper" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
                        <div class="vueperslide__title">{{ i.toString() }}</div>
                    </div> -->
                        <KeepUpdatedItem />
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
import KeepUpdatedItem from '@/components/KeepUpdatedItem';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'KeepUpdated',
    components: {
        SmallText,
        Button02,
        KeepUpdatedItem,
        VueperSlides, 
        VueperSlide
    },
  
}
</script>