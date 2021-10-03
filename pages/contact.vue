<template>
    <div>
        <ContactBanner />
        <FindUsNearYou />
        <GetKnowUsBetter />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </div>
</template>

<script>

import ContactBanner from '@/components/ContactBanner';
import FindUsNearYou from '@/components/FindUsNearYou';
import GetKnowUsBetter from '@/components/GetKnowUsBetter';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import Footer from '@/components/Footer';
export default {
    name: 'Contact',
    components: {
        ContactBanner,
        FindUsNearYou,
        GetKnowUsBetter,
        Furniture,
        FurnitureGalley,
        GetInspired,
        Footer
    }
}
</script>