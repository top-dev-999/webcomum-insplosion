<template>
    <div>

        <InspirationOutBanner />
        <InspirationOutProducts />
        <GoesWellWith />
        <InspirationList />
        <UltimateTools />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <FooterImageTiles />
        <GetInspired />
  </div>
</template>

<script>
import InspirationOutBanner from '@/components/banner/InspirationOutBanner';
import InspirationOutProducts from '@/components/Inspirationout/InspirationOutProducts';
import GoesWellWith from '@/components/Inspirationout/GoesWellWith';
import InspirationList from '@/components/Inspirations/InspirationList';
import UltimateTools from '@/components/UltimateTools';
import GetInspired from '@/components/Inspirations/GetInspired';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import FooterImageTiles from '@/components/FooterImageTiles';
export default {
    name: "InspirationOut",
    components: {
        InspirationOutProducts,
        GoesWellWith,
        UltimateTools,
        GetInspired,
        Footer,
        Furniture,
        FurnitureGallery,
        InspirationList,
        FooterImageTiles,
        InspirationOutBanner
    }
}
</script>