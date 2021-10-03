<template>
    <div class="insplosion-ebooks-catalogues-control">
        <div class="insplosion-ebooks-catalogues-header">
            <div>
                <h2>INSPLOSIONS</h2>
            </div>
            <div>
                <Button02 text='VIEW ALL BRANDS' theme="black" hover="white-black" />
            </div>  
        </div>
        <div class="insplosion-ebooks-catalogues-lists">
            <div class="small-big-container">
                    <div class="big-one-container">
                        <InsplosionBrandsSlideItem :data="bigSlide" />
                    </div>
                <div class="small-six-container">
                    
                    <div class="small-three-row">
                        <InsplosionBrandsStaticItem :data="item" />
                        <InsplosionBrandsStaticItem :data="item" />
                        <InsplosionBrandsStaticItem :data="item" />
                    </div>
                    <div class="small-three-row">
                        <InsplosionBrandsStaticItem :data="item" />
                        <InsplosionBrandsStaticItem :data="item" />
                        <InsplosionBrandsStaticItem :data="item" />
                    </div>
                </div>
            </div>
            <div class="small-five-container">
                    <InsplosionBrandsStaticItem :data="item" />
                    <InsplosionBrandsStaticItem :data="item" />
                    <InsplosionBrandsStaticItem :data="item" />
                    <InsplosionBrandsStaticItem :data="item" />
                    <InsplosionBrandsStaticItem :data="item" />
            </div>
        </div>
    </div>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
import InsplosionBrandsSlideItem from '@/components/InsplosionBrandsSlideItem';
import InsplosionBrandsStaticItem from '@/components/InsplosionBrandsStaticItem';
export default {
    name: 'ExclusiveDesign',
    components: {
        SmallText,
        Button02,
        InsplosionBrandsSlideItem,
        InsplosionBrandsStaticItem
    },
    data: function () {
        return {
            bigSlide: {
                images: [
                    {
                        image: require('@/assets/images/insplosionbrands/img.png'),
                    },
                    {
                        image: require('@/assets/images/insplosionbrands/img.png'),
                    },
                    {
                        image: require('@/assets/images/insplosionbrands/img.png'),
                    },
                ],
                title: 'MODERN MARBLE LIVING ROOM',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                
            },
            item: {
                image: require('@/assets/images/insplosionbrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        }
    }
}
</script>