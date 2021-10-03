<template>
    <div class="categories-control">
        <BrandEntry type="type1" />
        <CategoryControlLeft :slidedata="items1"/>
        <BrandEntry type="type2" />
        <CategoryControlRight :slidedata="items2"/>
        <BrandEntry type="type1" />
        <CategoryControlLeft :slidedata="items3"/>
        <InspirationList />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <FooterImageTiles />
        <GetInspired />
        <Socialbar />
    </div>
</template>

<script>
import BrandEntry from '@/components/categories/BrandEntry';
import CategoryControlLeft from '@/components/categories/CategoryControlLeft';
import CategoryControlRight from '@/components/categories/CategoryControlRight';
import InspirationList from '@/components/Inspirations/InspirationList';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import FooterImageTiles from '@/components/FooterImageTiles';
import Socialbar from '@/components/Socialbar';
export default {
    name: "Categories",
    components: {
        BrandEntry,
        CategoryControlLeft,
        CategoryControlRight,
        InspirationList,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
        FooterImageTiles,
        Socialbar
    },
    data: function() {
        return {
            items1: [
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123456', x: '32%', y: '87%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123457', x: '12%', y: '56%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123459', x: '32%', y: '12%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123458', x: '31%', y: '87%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123450', x: '72%', y: '34%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123451', x: '87%', y: '12%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                ],
            items2: [
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123452', x: '43%', y: '75%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123453', x: '54%', y: '12%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123454', x: '65%', y: '96%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123455', x: '76%', y: '11%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123440', x: '23%', y: '22%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123441', x: '43%', y: '44%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                ],
            items3: [
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123442', x: '32%', y: '87%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123443', x: '12%', y: '56%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123444', x: '32%', y: '12%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                    {
                        image: require('@/assets/images/categories/slides/rectangle.png'),
                        indicators: [
                            {id:'123445', x: '34%', y: '87%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                            {id:'123446', x: '76%', y: '34%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                            {id:'123447', x: '87%', y: '12%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                        ]
                    },
                ],
        }
    }
}
</script>