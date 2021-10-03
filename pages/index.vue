<template>
  <div id="listgroup-ex">
      <HomeBanner />
      <AppMenu theme='white' height="thin" :fixedmenu="fixedmenu" />
      <LuxuryBrands />
      <UltimateTools />
      <InsplosionCollections />
      <KeepUpdated />
      <InspirationsWithTag />
      <InsplosionBrands />
      <InspirationTrends />
      <Furniture />
      <FurnitureGallery />
      <Footer />
      <!-- <FooterImageTiles /> -->
      <GetInspired />
      <SideMenu v-if="sidemenu == true"/>
  </div>
</template>

<script>
import LuxuryBrands from '@/components/LuxuryBrands';
import InspirationTrends from '@/components/Inspirations/InspirationTrends';
import InspirationsWithTag from '@/components/Inspirations/InspirationWithTag';
import InsplosionCollections from '@/components/InsplosionCollections';
import InsplosionBrands from '@/components/InsplosionBrands';
import KeepUpdated from '@/components/KeepUpdated';
import UltimateTools from '@/components/UltimateTools';
import HomeBanner from '@/components/banner/HomeBanner';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import FooterImageTiles from '@/components/FooterImageTiles';
import AppMenu from '@/components/AppMenu';
import SideMenu from '@/components/SideMenu';
export default {
  name:'Home',
  components : {
    GetInspired,
    Footer,
    Furniture,
    FurnitureGallery,
    LuxuryBrands,
    InspirationTrends,
    InspirationsWithTag,
    KeepUpdated,
    UltimateTools,
    HomeBanner,
    InsplosionCollections,
    InsplosionBrands,
    FooterImageTiles,
    AppMenu,
    SideMenu
  },
  layout: 'main',
  mounted(){
    window.addEventListener("scroll", this.runOnScroll);
  },
  data() {
    return {
      fixedmenu: false,
      sidemenu: false,
    }
  },
  methods: {
    runOnScroll(e) {
      if(window.pageYOffset > 40) {
        this.fixedmenu = true;
        this.sidemenu = true;
      } else {
        this.fixedmenu = false;
        this.sidemenu = false;
      }

    },
    
  }
};
</script>
