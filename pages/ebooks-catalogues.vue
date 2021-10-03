<template>
    <div>
        <EbooksCataloguesBanner />
        <LatestInspirationalTools />
        <AllInspirationalTools />
        <InspirationList />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
        <div>
            <Socialbar />
        </div>
    </div>
</template>

<script>
import EbooksCataloguesBanner from '@/components/banner/EbooksCataloguesBanner';
import LatestInspirationalTools from '@/components/ebookscatalogues/LatestInspirationalTools';
import AllInspirationalTools from '@/components/ebookscatalogues/AllInspirationalTools';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import Socialbar from '@/components/Socialbar';
export default {
    name: 'Ebooks&Catalogues',
    components: {
        EbooksCataloguesBanner,
        LatestInspirationalTools,
        AllInspirationalTools,
        InspirationList,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
        Socialbar
    }

}
</script>