<template>
  <div>
      <AboutBanner />
      <DiscoverInspiration />
      <Believes />
      <WeDeliver />
      <InspirationList />
      <Furniture />
      <FurnitureGallery />
      <Footer />
      <GetInspired />
    </div>
</template>
<script>
import GetInspired from '@/components/Inspirations/GetInspired';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import Button from '@/components/basic/button';
import Believes from '@/components/Believes/Believes';
import WeDeliver from '@/components/WeDeliver';
import DiscoverInspiration from '@/components/Inspirations/DiscoverInspiration';
import AboutBanner from '@/components/banner/AboutBanner';
export default {
  name:'About',
  components : {
    DiscoverInspiration,
    GetInspired,
    Footer,
    Furniture,
    FurnitureGallery,
    Believes,
    WeDeliver,
    Button,
    InspirationList,
    AboutBanner
  }
};
</script>
