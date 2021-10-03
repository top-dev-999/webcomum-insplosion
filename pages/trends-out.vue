<template>
    <div>
        <TrendsOutTiles />
        <TrendsOutDescription />
        <TrendsOutSlide />
        <TrendsOutProducts />
        <TrendsOutMoodBoards />
        <UltimateTools />
        <InspirationList />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <FooterImageTiles />
        <GetInspired />
    </div>
</template>

<script>
import TrendsOutTiles from '@/components/trendsout/TrendsOutTiles';
import TrendsOutDescription from '@/components/trendsout/TrendsOutDescription';
import TrendsOutSlide from '@/components/trendsout/TrendsOutSlide';
import TrendsOutProducts from '@/components/trendsout/TrendsOutProducts';
import TrendsOutMoodBoards from '@/components/trendsout/TrendsOutMoodBoards';
import UltimateTools from '@/components/UltimateTools';
import GetInspired from '@/components/Inspirations/GetInspired';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import FooterImageTiles from '@/components/FooterImageTiles';
export default {
    name: "TrendsOut",
    components: {
        TrendsOutTiles,
        TrendsOutDescription,
        TrendsOutSlide,
        TrendsOutProducts,
        TrendsOutMoodBoards,
        UltimateTools,
        GetInspired,
        Footer,
        Furniture,
        FurnitureGallery,
        InspirationList,
        FooterImageTiles
    }
}
</script>