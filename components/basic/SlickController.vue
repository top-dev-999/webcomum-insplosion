
<template>
  <div class="ultimate-slide-container">
    <vueper-slides
      ref="vueperslides2"
      :slide-ratio="1 / 8"
      :dragging-distance="50"
      :visible-slides="3"
      fixed-height="450px"
      :infinite="true"
      :bullets="false"
      class="no-shadow"
      >
      <vueper-slide
        v-for="i in 8"
        :key="i"
        @click.native="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)">
        <template #content>
          <!-- <div class="vueperslide__content-wrapper" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
            <div class="vueperslide__title">{{ i.toString() }}</div>
          </div> -->
          <img src="@/assets/images/ultimatetools/item1.png" />
        </template>
      </vueper-slide>

      <template #arrow-left>
        <p></p>
      </template>

      <template #arrow-right>
        <p></p>
      </template>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    name: 'SlickController',
    components: { VueperSlides, VueperSlide },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  div[aria-hidden=false]:not(.vueperslide--active) {
    filter: blur(10px);
  }
</style>