<template>
  <div class="custom-modal-wrapper" :class="{open : gallery}">
    <div class="custom-modal-content">
        <div class="content">
          <a href="javascript:void(0)" class="modal-close" @click="closeGallery"><CloseSVG /></a>
          <Slick ref="slick" :options="slickOptionsGallery" class="product-detail-full-slider">
            <div class="product-detail-full-slider-item">
              <picture>
                <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x">
                <source media="(min-width: 768px)" srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x">
                <img srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x" alt="" title="">
              </picture>
            </div>
            <div class="product-detail-full-slider-item">
              <picture>
                <source media="(min-width: 992px)" srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x">
                <source media="(min-width: 768px)" srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x">
                <img srcset="https://fakeimg.pl/1400x675/ 1x, https://fakeimg.pl/2800x1350/ 2x" alt="" title="">
              </picture>
            </div>
          </Slick>
        </div>
    </div>
  </div>
</template>
<script>
import Slick from 'vue-slick';
import CloseSVG from "@/components/svg/Close";
import {EventBus} from "@/event-bus";
export default {
  name:'ProductsGallery',
  props:{
    gallery:{
      required:true
    },
    slickOptionsGallery:{
      required:true,
    }
  },
  components:{
    Slick,
    CloseSVG,
  },
  methods:{
    closeGallery(){
      EventBus.$emit("bus-close-gallery");
    }
  }
}
</script>
