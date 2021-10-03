<template>
  <div>
      <BlogBanner />
      <BlogControl />
      <CreateInsplosionAccount />
      <Furniture />
      <FurnitureGallery />
      <Footer />
      <FooterImageTiles />
      <GetInspired />
      <Socialbar />
  </div>
</template>
<script>
import CreateInsplosionAccount from '@/components/CreateInsplosionAccount';
import BlogBanner from '@/components/blogs/BlogBanner';
import BlogControl from '@/components/blogs/BlogControl';
import GetInspired from '@/components/Inspirations/GetInspired';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import FooterImageTiles from '@/components/FooterImageTiles';
import Socialbar from '@/components/Socialbar';
export default {
  name:'Blog',
  components : {
    BlogBanner,
    BlogControl,
    CreateInsplosionAccount,
    GetInspired,
    Footer,
    Furniture,
    FurnitureGallery,
    FooterImageTiles,
    Socialbar
  }
};
</script>
