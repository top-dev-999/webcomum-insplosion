<template>
    <b-container fluid class="px-0 search-out-control">
        <b-row align-h="center" class="mx-0 search-text">
            <h3 class="text-center">YOU SEARCH: <span>TABLE</span></h3>
        </b-row>
        <SearchResults :trends="trends"/>
        <InspirationList />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </b-container>
</template>

<script>
import SearchResults from '@/components/search/SearchResults';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGallery from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
export default {
    name: 'search-out',
    components: {
        SearchResults,
        InspirationList
    },
    data: function() {
        return {
            trends: [
                {
                    id: 1,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 2,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 3,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 4,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 5,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 6,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 7,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 8,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
            ]
        }
    }
}
</script>