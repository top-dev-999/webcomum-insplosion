<template>
    <div>
        <TrendsTiles />
        <TrendsControl />
        <InspirationList />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </div>
</template>

<script>
import TrendsTiles from '@/components/trends/TrendsTiles';
import TrendsControl from '@/components/trends/TrendsControl';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
export default {
    name: 'Trends',
    components : {
        TrendsTiles,
        TrendsControl,
        InspirationList,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
    }
}
</script>