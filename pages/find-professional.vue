<template>
    <div>
        <SearchProfessional />
        <ProfessionalResults />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </div>
</template>

<script>
import ProfessionalResults from '@/components/findprofessional/ProfessionalResults';
import SearchProfessional from '@/components/findprofessional/SearchProfessional';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
export default {
    name: "FindProfessional",
    components: {
        SearchProfessional,
        ProfessionalResults,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
    }
}
</script>