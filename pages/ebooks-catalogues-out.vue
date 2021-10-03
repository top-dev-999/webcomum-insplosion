<template>
    <div class="ebooks-catalogues-out-control">
        <EbooksCataloguesOutForm />
        <YouMayAlsoLike />
        <EbookCatalogueInspirations />
        <LinkCards />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </div>
</template>

<script>
import EbooksCataloguesOutForm from '@/components/ebookscatalogues/EbooksCataloguesOutForm';
import YouMayAlsoLike from '@/components/ebookscatalogues/YouMayAlsoLike';
import EbookCatalogueInspirations from '@/components/ebookscatalogues/EbookCatalogueInspirations';
import LinkCards from '@/components/ebookscatalogues/LinkCards';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
export default {
    name: "EbooksCataloguesOut",
    components: {
        EbooksCataloguesOutForm,
        YouMayAlsoLike,
        EbookCatalogueInspirations,
        LinkCards,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
    }
}
</script>