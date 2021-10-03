<template>
    <div>
        <CollectionTiles />
        <CollectionMenu />
        <BestSellers />
        <LivingRoom />
        <DiningRoom />
        <Hall />
        <BathRoom />
        <CollectionDescription />
        <CollectionCatalogue />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
        <Socialbar />
    </div>
    
</template>

<script>
import CollectionMenu from '@/components/collection/CollectionMenu';
import CollectionTiles from '@/components/collection/CollectionTiles';
import BestSellers from '@/components/collection/BestSellers';
import LivingRoom from '@/components/collection/LivingRoom';
import DiningRoom from '@/components/collection/DiningRoom';
import Hall from '@/components/collection/Hall';
import BathRoom from '@/components/collection/BathRoom';
import CollectionDescription from '@/components/collection/CollectionDescription';
import CollectionCatalogue from '@/components/collection/CollectionCatalogue';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import Socialbar from '@/components/Socialbar';
export default {
    name: 'Collection',
    components: {
        CollectionTiles,
        CollectionMenu,
        BestSellers,
        LivingRoom,
        DiningRoom,
        Hall,
        BathRoom,
        CollectionDescription,
        CollectionCatalogue,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
        Socialbar
    }
}
</script>