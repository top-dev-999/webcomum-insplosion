<template>
    <b-container fluid id="brands">
        <b-row>
            <b-col offset-lg="2" lg="8" class="insplosion-brands-header">
                <div>
                    <SmallText text="DISCOVER OUR BRANDS" />
                    <h2>INSPLOSION BRANDS</h2>
                </div>
                <div>
                    <Button02 text='VIEW ALL TRENDS' theme="black"  hover="black-white"/>
                </div>  
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="1" class="px-1"></b-col>
            <b-col lg="4" sm="12" class="px-1">
                <InsplosionBrandsSlideItem :data="bigSlide" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="1" class="px-1"></b-col>
        </b-row>
        <b-row>
            <b-col lg="1" class="px-1"></b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <InsplosionBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="1" class="px-1"></b-col>
        </b-row>
    </b-container>
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
                logo: require('@/assets/images/insplosionbrands/items/logo.png'),
                title: 'MODERN MARBLE LIVING ROOM',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        }
    }
}
</script>