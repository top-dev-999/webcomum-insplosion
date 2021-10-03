<template>
    <!-- <div class="luxury-brands-control">
        <div class="luxury-brands-header">
            <div>
                <SmallText text="OUR LATEST INSPIRATIONS" />
                <h1>LUXURY BRANDS</h1>
            </div>
            <div>
                <Button02 text='VIEW ALL TRENDS' theme="black" />
            </div>  
        </div>
        <div class="luxury-brands-lists" v-if="$mq == 'desktop'">
            <div class="small-big-container">
                    <div class="big-one-container">
                        <LuxuryBrandsSlideItem :data="bigSlide" />
                    </div>
                <div class="small-six-container">
                    
                    <div class="small-three-row">
                        <LuxuryBrandsStaticItem :data="item" />
                        <LuxuryBrandsStaticItem :data="item" />
                        <LuxuryBrandsStaticItem :data="item" />
                    </div>
                    <div class="small-three-row">
                        <LuxuryBrandsStaticItem :data="item" />
                        <LuxuryBrandsStaticItem :data="item" />
                        <LuxuryBrandsStaticItem :data="item" />
                    </div>
                </div>
                
                
            </div>
            <div class="small-five-container">
                    <LuxuryBrandsStaticItem :data="item" />
                    <LuxuryBrandsStaticItem :data="item" />
                    <LuxuryBrandsStaticItem :data="item" />
                    <LuxuryBrandsStaticItem :data="item" />
                    <LuxuryBrandsStaticItem :data="item" />
            </div>
        </div>
        <div class="luxury-brands-lists" v-if="$mq == 'tablet' || $mq == 'mobile'" :class="$mq">
            <div class="big-one-container">
                <LuxuryBrandsSlideItem :data="bigSlide" />
            </div>
            <div class="small-two-container">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </div>
            <div class="small-two-container">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </div>
            <div class="small-two-container">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </div>
        </div>
    </div> -->
    <b-container fluid class="luxury-brands-control" id="inspirations">
        <b-row>
            <b-col offset-lg="2" lg="8" class="luxury-brands-header">
                <div>
                    <SmallText text="OUR LATEST INSPIRATIONS" />
                    <h1>LUXURY BRANDS</h1>
                </div>
                <div>
                    <Button02 text='VIEW ALL TRENDS' theme="black" hover="black-white" />
                </div>  
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="1" class="px-1"></b-col>
            <b-col lg="4" sm="12" class="px-1">
                <LuxuryBrandsSlideItem :data="bigSlide" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="1" class="px-1"></b-col>
        </b-row>
        <b-row>
            <b-col lg="1" class="px-1"></b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="2" sm="6" class="px-1">
                <LuxuryBrandsStaticItem :data="item" />
            </b-col>
            <b-col lg="1" class="px-1"></b-col>
        </b-row>
    </b-container>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
import LuxuryBrandsSlideItem from '@/components/LuxuryBrandsSlideItem';
import LuxuryBrandsStaticItem from '@/components/LuxuryBrandsStaticItem';
export default {
    name: 'LuxuryBrands',
    components: {
        SmallText,
        Button02,
        LuxuryBrandsSlideItem,
        LuxuryBrandsStaticItem
    },
    data: function () {
        return {
            bigSlide: {
                images: [
                    {
                        image: require('@/assets/images/luxurybrands/img.png'),
                    },
                    {
                        image: require('@/assets/images/luxurybrands/img.png'),
                    },
                    {
                        image: require('@/assets/images/luxurybrands/img.png'),
                    },
                ],
                title: 'MODERN MARBLE LIVING ROOM',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                
            },
            item: {
                image: require('@/assets/images/luxurybrands/items/item1.png'),
                title: 'MODERN MARBLE LIVING ROOM',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        }
    }
}
</script>